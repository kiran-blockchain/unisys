import React, {Component} from 'react';
import {StyleSheet,Image} from 'react-native';
import CountryListComponent from './countrylist';
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
  Picker,
  CheckBox,
  ListItem,
  Radio,
  DatePicker,
  View,
  

} from 'native-base';


export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      showSearchBar: false,
      countryList: [],
      selectedCountry: '',
      AgreeTerms: false,
      gender: '',
      chosenDate:new Date()
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
  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(result => result.json())
      .then(data => {
        console.log(data);
        this.setState({countryList: data});
      });
  }
  bindOptions = () => {
    if (this.state.countryList.length > 0) {
      return this.state.countryList.map((x, i) => {
        return <Picker.Item label={x.name} key={i} value={x.alpha2Code} />;
      });
    } else {
      return <Picker.Item label="Select Country" value="" />;
    }
  };
  render() {
    let currentDate = new Date();
    let minDate = parseInt(currentDate.getDate()-1);
    let maximumDate=parseInt(currentDate.getDate()+1);
    let imageUrl ='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg';
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

            <Picker
              note
              mode="dropdown"
              style={{width: 200, margin: 10}}
              selectedValue={this.state.selectedCountry}
              onValueChange={e => {
                this.setState({selectedCountry: e});
              }}>
              {this.bindOptions()}
            </Picker>
            {/* <Container style={{flex: 1, flexDirection: 'row', margin: 20}}> */}
            {/* <Content> */}
              <ListItem  onPress={e => this.setState({gender: 'M'})}>
                <Left>
                  <Text>Male</Text>
                </Left>
                <Right>
                  <Radio selected={this.state.gender == 'M'} />
                </Right>
              </ListItem>
              <ListItem onPress={e => this.setState({gender: 'F'})}>
                <Left>
                  <Text>Female</Text>
                </Left>
                <Right>
                  <Radio selected={this.state.gender == 'F'} />
                </Right>
              </ListItem>
              <DatePicker
            defaultDate={new Date()}
            minimumDate={new Date(2019,11,1)}
            maximumDate={new Date(2019,11,20)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Date Picker"
            textStyle={{ color: "red" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(value)=>{this.setState({chosenDate:value})}}
            disabled={false}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
            {/* </Content> */}
            {/* </Container> */}
            <CheckBox
              checked={this.state.AgreeTerms}
              style={{margin: 10}}
              onPress={e => {
                this.setState({AgreeTerms: !this.state.AgreeTerms});
              }}
            />
            <Button
              iconLeft
              style={this.state.AgreeTerms ? styles.enabled : styles.disabled}
              disabled={this.state.AgreeTerms}>
              <Icon name="ios-log-in" />
              <Text>Signup</Text>
            </Button>
            
          </Form>
          <CountryListComponent countries={this.state.countryList}/>
          {/* <View>
          <Image  style={{width: 66, height: 58}} source={{uri:imageUrl}} ></Image></View> */}
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: 'red',
    margin: 10,
    width: 150,
    justifyContent: 'center',
  },
  enabled: {
    backgroundColor: 'green',
    margin: 10,
    width: 150,
    justifyContent: 'center',
  },
});
