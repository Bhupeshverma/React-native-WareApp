import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    ListView,
    TouchableHighlight,
    Dimensions,
    Animated,
    TextInput,
    ActivityIndicator,
    ScrollView,
    Picker
} from 'react-native'
import {SearchBar} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions';
import OrderDetail from '../../components/OrderDetail';
import {Card, CardSection} from '../../components/common';
import firebase from 'firebase';

class AssignedOrders extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows([]),
            rawData: '',
            text: '',
            name: '',
            status: 1
        }

    }
    componentDidMount() {
        this.props.fetchOrders()
    }

    handleOrder(){
      if(!this.props.orders)
       {
         return <ActivityIndicator size="large"/>
       }
       else{
         let data = this.props.orders

         return data.map((order) =>{
           return(
             <Card key={order.id}>
               <CardSection>
                 <View style={styles.headerContentStyle}>
                   <Text style={styles.headerTextStyle}>ORDER ID:  {order.id}</Text>
                   <Text>CUSTOMER NAME:  {order.name}</Text>
                   <Text>ORDER DATE:  {order.postId}</Text>
                 </View>
               </CardSection>

             </Card>
           )
         });

       }
    }
    filterSearch(text){
        this.setState({text})
        let newData = this.dataFilter(text, this.state.rawData);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData)
        })
    }

    dataFilter(text, data){
        return data.filter(function(item){
            const itemData = item.id
            const textData = text
            const courierData = item.name.toUpperCase()
            const courierTextData = text.toUpperCase()
            if( itemData == textData){
              return item
            }else{
              return courierData.indexOf(courierTextData) > -1
            }

        })
    }
    render(){
        return (
            <View style={styles.container}>

              <SearchBar
                lightTheme
                onChangeText={(text) =>this.filterSearch(text)}
                placeholder='Search by Id or CourierName'
                value={this.state.text} />
              <Picker
                style={styles.picker}
                selectedValue={this.state.status}
                onValueChange={(lang) => this.setState({status: lang})}
              >
                <Picker.Item label="Status 1" value="1" />
                <Picker.Item label="Status 2" value="2" />
              </Picker>
              <Text>Selected Status is : {this.state.status}</Text>
              <ScrollView>
                {this.handleOrder()}
              </ScrollView>


            </View>
        )
    }
}
const mapStateToProps = ({ order }) => {
  const { spinner, orders, error } = order;
  return { spinner, orders, error  };
};

export default connect(mapStateToProps, {
  fetchOrders
})(AssignedOrders);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    listContainer: {
        marginHorizontal: 10
    },
    picker:{
      backgroundColor: '#f2f2f2',

    },
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    }

  })
