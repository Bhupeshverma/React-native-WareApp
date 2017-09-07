import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/screens/Auth/LoginForm';
import MainScreen from './src/screens/MainScreen';
import AssignedOrders from './src/screens/Tabs/AssignedOrders';
import ScanOrders from './src/screens/orderScanner';
const RouterComponent = () => {
  return (
    <Router >

      <Scene key="root" hideNavBar>
        <Scene key="auth" >
          <Scene key="login" component={LoginForm} />
        </Scene>
        <Scene key="Main">
          <Scene key="Orders" component={AssignedOrders}  />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
