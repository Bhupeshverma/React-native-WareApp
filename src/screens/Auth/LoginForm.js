import Login from 'react-native-simple-login'
import React, {Component} from 'react'
import {Text, View, StyleSheet, ActivityIndicator, Image} from 'react-native'
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { Actions } from 'react-native-router-flux';
import MainScreen from '../MainScreen';
class LoginForm extends Component{
  onLogin(email, password){
        this.props.loginUser(email, password)
  }
  onResetPassword(email){
    console.log(email)
  }
  render(){
    return(
        <View style={styles.container}>

          <Login
            onLogin={this.onLogin.bind(this)}
            onResetPassword={this.onResetPassword.bind(this)}

          />
          <View style={styles.responseContainer}>
            {this.props.loading ? <ActivityIndicator size='large'/> : <View></View>}
            {this.props.error ?<View><Text>Authentication failure !</Text></View>:<View></View>}

          </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#f2f2f2'
    },
    responseContainer: {
      flexDirection: 'column',

    }
});
const mapStateToProps = ({ auth }) => {
  const { error, loading, user } = auth;

  return { error, loading, user };
};

export default connect(mapStateToProps, {
  loginUser
})(LoginForm);
