import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  BackAndroid
} from 'react-native';

import HomePage from './components/home/HomePage';
import SplashPage from './components/splash/SplashPage';
import FirstPage from './components/common/FirstPage';
import SecondPage from './components/common/SecondPage';
import ThirdPage from './components/common/ThirdPage';
import NotFound from './components/common/NotFound';
import routes from './routes';

var _navigator, _route;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if(_route.index>0) {
    _navigator.pop();
    return true;
  }
  return false;
});

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) =>
          {
            if(route.title === "Home Page")
              return {
                ...Navigator.SceneConfigs.FloatFromRight,
                gestures: {}
              }

            if(route.title === "First Page")
              return Navigator.SceneConfigs.FloatFromBottom;

            return Navigator.SceneConfigs.FloatFromRight;
          }
        }
      />
    );
  }

  renderScene(route, navigator){
    _navigator = navigator;
    _route = route;
    let routeId = route.index;

    switch(routeId) {
      case -1:
        return (
          <SplashPage navigator={navigator} route={route} routeStack={routes}/>
        );

      case 0:
        return (
          <HomePage navigator={navigator} route={route} routeStack={routes} />
        );

      case 1:
        return (
          <FirstPage navigator={navigator} route={route} routeStack={routes} />
        );

      case 2:
        return (
          <SecondPage navigator={navigator} route={route} routeStack={routes} />
        );

      case 3:
        return (
          <ThirdPage navigator={navigator} route={route} routeStack={routes} />
        );

      default:
        return (
          <NotFound navigator={navigator} route={route} routeStack={routes} />
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});