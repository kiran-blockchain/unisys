import React, {Component} from 'react';
import {Platform, View, Text, Picker,ScrollView,StyleSheet,
    DatePickerAndroid,
    DatePickerIOS} from 'react-native';
import {ViewBoxStyles} from './styles';
export default class ViewBoxComponent extends Component {
  constructor() {
    super();
    this.state={
        language:""
    }
  }
 async componentDidMount(){
  //   console.log(Platform.OS=='')
    try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          // Use `new Date()` for current date.
          // May 25 2020. Month 0 is January.
          date: new Date(2020, 4, 25),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          // Selected year, month (0-11), day
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
  }
  render() {
    return (
      <View>
        {/* <Text style={ViewBoxStyles.viewBoxTextStyle}>View Box Component</Text>
        
       
       <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100, marginLeft:20}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView> */}
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