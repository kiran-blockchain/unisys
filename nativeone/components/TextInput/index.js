import React , {Component} from 'react';
import {TextInput,View} from 'react-native';
import { TextInputStyles } from './styles';
export default class TextInputComponent extends Component{
    constructor(){
        super();
    }
    render(){
        return <View>
            <TextInput style={TextInputStyles.textBox} 
            keyboardAppearance="light"
            keyboardType=""
            placeholder={"Enter here"}/>
        </View>
    }
}