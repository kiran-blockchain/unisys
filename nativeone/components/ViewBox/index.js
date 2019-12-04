import React, {Component} from 'react';
import {
  Platform,
  View,
  Text,
  Picker,
  ScrollView,
  StyleSheet,
  DatePickerAndroid,
  DatePickerIOS,
} from 'react-native';
import {ViewBoxStyles} from './styles';
export default class ViewBoxComponent extends Component {
  constructor() {
    super();
    this.state = {
      language: '',
    };
  }
  // async componentDidMount() {
  //   //   console.log(Platform.OS=='')
  //   try {
  //     const {action, year, month, day} = await DatePickerAndroid.open({
  //       // Use `new Date()` for current date.
  //       // May 25 2020. Month 0 is January.
  //       date: new Date(2020, 4, 25),
  //     });
  //     if (action !== DatePickerAndroid.dismissedAction) {
  //       // Selected year, month (0-11), day
  //     }
  //   } catch ({code, message}) {
  //     console.warn('Cannot open date picker', message);
  //   }
  // }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 4, flexDirection:'column' ,height: 50,
        borderWidth:1,borderRadius:.5,borderColor:'black', margin:.05,
        backgroundColor: 'powderblue'}}/>
          
        <View style={{flex: 4, height: 50, backgroundColor: 'skyblue', margin:.05}} />
        <View style={{flex: 4, height: 50, backgroundColor: 'steelblue'}} />
        <View style={{flex: 4, flexDirection:'column' ,height: 50,
        borderWidth:1,borderRadius:.5,borderColor:'black',margin:.05,
        backgroundColor: 'powderblue'}}/>
          
        <View style={{flex: 4, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 4, height: 50, backgroundColor: 'steelblue'}} />
        <View style={{flex: 4, flexDirection:'column' ,height: 50,
        borderWidth:1,borderRadius:.5,borderColor:'black',
        backgroundColor: 'powderblue'}}/>
          
        <View style={{flex: 4, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 4, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
