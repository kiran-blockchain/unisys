import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import { StyleSheet,  SafeAreaView, ScrollView } from 'react-native';
export default class CountryListComponent extends Component {
  constructor() {
    super();
  }
  render() {
    let countries = (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{uri: 'Image URL'}} />
        </Left>
        <Body>
          <Text>Sankhadeep</Text>
          <Text note numberOfLines={1}>
            Its time to build a difference . .
          </Text>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
    if(this.props.countries.length>0){
        return this.props.countries.map((x,i)=>{
            console.log(x.flag);
            return <ListItem thumbnail key={i}>
            <Left>
              <Thumbnail square source={{uri:x.flag}} />
            </Left>
            <Body>
              <Text>{x.name}</Text>
              <Text note numberOfLines={1}>
               Population:{x.population}
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        })
    }
    return (
       
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{uri: 'Image URL'}} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 6,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });
  
