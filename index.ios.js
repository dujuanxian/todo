'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
} = React;
var styles = require('./stylesheet');

var todo = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('todo', () => todo);
