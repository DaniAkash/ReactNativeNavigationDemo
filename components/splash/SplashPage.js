import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  Button
} from 'react-native';
import styles from '../../styles/styles';

export default class SplashPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.navigate = this.navigate.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.navigator.push(this.props.routeStack[1]);
    },2000);
  }

  navigate() {
    this.props.navigator.push(this.props.routeStack[1]);
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
          {
            this.props.route.index>=0 &&
            <Button
              style={styles.nextButton}
              onPress={this.navigate}
              title="Next Page"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          }
        </View>
        <Text style={styles.welcome}>
          {this.props.route.title} - ({this.props.route.index})
        </Text>
        <Text style={styles.instructions}>
          This is the Splash Page!
        </Text>
        <Text style={styles.instructions}>
          You can see this page only{'\n'}
          on beginning of the app!
        </Text>
      </View>
    );
  }
}