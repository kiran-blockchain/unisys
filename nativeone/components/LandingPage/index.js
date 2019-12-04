import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Item,
  Input,
  Form,
  Label,
} from 'native-base';
export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      showSearchBar: false,
    };
  }
  showSearch = () => {
    let box = '';
    if (this.state.showSearchBar) {
      box = (
        <Form>
          <Item>
            <Input placeholder="Search" />
          </Item>
        </Form>
      );
    }
    return <Content>{box}</Content>;
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Right>
            <Button
              transparent
              onPress={e => {
                this.setState({showSearchBar: !this.state.showSearchBar});
              }}>
              <Icon name="search" />
            </Button>
            <Button transparent>
              <Icon name="heart" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
        <Container>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Age</Label>
              <Input />
            </Item>
           
            <Button iconLeft style={styles.buttonColor}>
              <Icon name="ios-log-in" />
              <Text>Signup</Text>
            </Button>
           
          </Form>
        </Container>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  buttonColor:{
    backgroundColor:'red',
    margin:10,
    width:150,
    justifyContent:"center"
    

  }
})