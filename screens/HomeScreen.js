import React, { Component } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

import {Container,Content,header,Form,Input,Item,Button,Label} from 'native-base';
import { MonoText } from '../components/StyledText';
import * as firebase from 'firebase';
class HomeScreen extends Component{
  constructor(props) {//pararmeters of class for example one prop of the image is source
    super(props)
    
    this.state= ({
       recipe:'', 
       ingredients:''
    })
 }

 submit = (recipe,ingredients) =>{ //declaration of function email and pass are its parameters
  firebase.database().ref('recipes/01').set(
    {
       recipe:{recipe},
       ingredient:{ingredients}
    }
  )
}


 render(){
  return (
    
    <View style={styles.container}>
          <Text style={styles.text} textAlign="center">Enter your recipe</Text>
          <TextInput style = {styles.inputrecipe}
          multiline={true}
          placeholder = "Add Your Recipe"
          onChangeText =  {(recipe) => this.setState( {recipe} )}
          ></TextInput>
          <TextInput style = {styles.inputing}
          placeholder = "Ingredients?"
          multiline={true}
          onChangeText =  {(ingredient) => this.setState( {ingredient} )}
          ></TextInput>  

      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submit(this.state.recipe, this.state.ingredients)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
    </View>
  );
}
}

export default HomeScreen

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {flex:1,
    backgroundColor: 'red',
    padding:10
  },
  text:{
    flex:1,
    fontSize:20,
    margin:20,
  },
  inputrecipe:{
    flex:5,
    borderWidth:1,
    borderRadius:10,
    marginVertical:30
  },
  inputing:{
    flex:5,
    borderWidth:1,
    marginVertical:30,
    borderRadius:10,

  },
  submitButton:{
    flex:1,
    borderWidth:2,
    borderRadius:1,
    textAlign: 'right', alignSelf: 'stretch'
  }
});
