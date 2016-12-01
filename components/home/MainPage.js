import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  Button
} from 'react-native';

export default class MainPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    this.props.navigator.replace({id: 'splash'});
  }

  render (){
    return (
      <View style={styles.container}>
        <Button
          onPress={this.navigate}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.welcome}>
          MainPage - {this.props.routeId}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
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