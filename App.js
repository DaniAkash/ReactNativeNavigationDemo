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
import FirstPage from './components/common/FirstPage';
import SecondPage from './components/common/SecondPage';
import ThirdPage from './components/common/ThirdPage';
import NotFound from './components/common/NotFound';

const routes = [
  {title: 'Splash Screen', index: -1},
  {title: 'Main Page', index: 0},
  {title: 'First Page', index: 1},
  {title: 'Second Page', index: 2},
  {title: 'Third Page', index: 3}
];

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
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
          <SplashPage navigator={navigator} route={route} routeStack={routes}/>
        );

      case 0:
        return (
          <MainPage navigator={navigator} route={route} routeStack={routes} />
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