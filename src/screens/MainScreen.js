import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import AssignedOrders from './Tabs/AssignedOrders'
const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]}>

  <AssignedOrders />
</View>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class MainScreen extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Assigned Orders' },
      { key: '2', title: 'Move to Temp' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
  });

  render() {
    return (

        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
        />


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
