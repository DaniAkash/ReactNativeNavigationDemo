import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import configureStore from './store/configureStore';
import MainPage from './components/home/MainPage';
import SplashPage from './components/splash/SplashPage';

export default class App extends Component {
  render() {
    const routes = [
      {title: 'Splash Screen', index: -1},
      // {title: 'Main Page', index: 0},
      // {title: 'First Page', index: 1},
      // {title: 'Second Page', index: 2},
      // {title: 'Third Page', index: 3}
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) =>
          {
            if (route.sceneConfig)
            {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }
        }
      />
    );
  }

  renderScene(route, navigator){
    let routeId = route.index;

    switch(routeId) {
      case -1:
        return (
          <SplashPage navigator={navigator} routeId={route.id}/>
        );

      case 0:
        return (
          <MainPage navigator={navigator} routeId={route.id}/>
        );

      case 1:
        return (
          <SplashPage navigator={navigator} routeId={route.id}/>
        );

      case 2:
        return (
          <SplashPage navigator={navigator} routeId={route.id}/>
        );

      case 3:
        return (
          <SplashPage navigator={navigator} routeId={route.id}/>
        );
    };
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