import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  View,
  Button
} from 'react-native';
import styles from '../../styles/styles';

export default class MainPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.navigate = this.navigate.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
  }

  navigate() {
    this.props.navigator.push(this.props.routeStack[2]);
  }

  navigateBack() {
    this.props.navigator.pop();
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.navButtons}>
          {
            this.props.route.index>0 &&
            <Button
              style={styles.backButton}
              onPress={this.navigateBack}
              title="<-"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          }
          <Button
            style={styles.nextButton}
            onPress={this.navigate}
            title="Next Page"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <Text style={styles.welcome}>
          {this.props.route.title} - ({this.props.route.index})
        </Text>
        <Text style={styles.instructions}>
          No Back for the Main Page
        </Text>
        <Text style={styles.instructions}>
          Click back to exit the app!
        </Text>
      </View>
    );
  }
}