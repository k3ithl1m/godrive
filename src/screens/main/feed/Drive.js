import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Card from './Card';
import Top from './components/Top';
import Bottom from './components/Bottom';
import {going} from '../../data/going';

class Drive extends Component {
  render() {
    return (
      <View style = {{flex:1, backgroundColor: "#FFF"}}>
        <Top title = "DRIVE" />
        <ScrollView
          style = {{
            flex: 1,
            borderColor: "#1d1d1d",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            backgroundColor: "#FFF"
          }}
        >
          {
            going.map((l, i) => (
              <Card
                key = {i}
                to = {l.to}
                from = {l.from}
                time = {l.time}
                user = {l.user}
                onPress={this.props.onPress}
              />
            ))
          }
        </ScrollView>
        <Bottom/>
      </View>
    )
  }
}

export default Drive;
