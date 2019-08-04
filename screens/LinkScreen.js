import React, { Component } from 'react'
import {  View, StyleSheet,Text,FlatList } from 'react-native';

import {Container,Content,header,Form,Input,Item,Button,Label} from 'native-base';

class LinksScreen extends Component {
  
constructor (props){
  super(props)
  this.state = {
    fetched: false,
    dataSource:[],
    i:"omelet",
    url:"http://www.recipepuppy.com/api/?&q=",
   };
 }



  componentDidMount(){
    this.state.url=this.state.url+this.state.i+'&p=1',
    fetch(this.state.url).then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       fetched: true,
       loading:true,
       dataSource: responseJson,
      })
    });
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{
         height: .5,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    );
    }

  renderItem=(data)=>
<TouchableOpacity>
<Text style={styles.lightText}>{data.item.title}</Text>
<Text style={styles.lightText}>{data.item.ingredients}</Text></TouchableOpacity>
  render() {
    
  return(
    <View style={styles.container}>
    <FlatList
       data= {this.state.dataSource}
       renderItem= {item=> this.renderItem(item)}
       keyExtractor= {item=>item.title.toString()}
    />
   </View>

  );

  }

  }
  
export default LinksScreen


LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
