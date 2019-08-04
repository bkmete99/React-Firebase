import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,Alert} from 'react-native'

import * as firebase from 'firebase';

import {Container,Content,header,Form,Input,Item,Button,Label} from 'native-base';

const firebaseConfig={
  apiKey: "AIzaSyDC618os7MnjcMEgfCzIdz9A85Q5Uo0QdA",
  authDomain: "deneme-login-e29f1.firebaseapp.com",
  databaseURL: "https://deneme-login-e29f1.firebaseio.com",
  projectId: "deneme-login-e29f1",
  storageBucket: "",
}
firebase.initializeApp(firebaseConfig);


class LoginScreen extends Component {

   constructor(props) {//pararmeters of class for example one prop of the image is source
      super(props)
      
      this.state= ({ //changable properties
         email:'', //these are like variables
         pass:''
      })
   }

   login = (email,pass) =>{ //declaration of function email and pass are its parameters
         firebase.auth().signInWithEmailAndPassword(email,pass)
         if(firebase.auth().currentUser){
            Alert.alert("Login successful")
         }else{
            Alert.alert("Login successful")
         }
   }

   signup = (email,pass) =>{ //declaration of function email and pass are its parameters

      firebase.auth().createUserWithEmailAndPassword(email,pass)
firebase.database().ref('users/001').set(
   {
      name:'burak karma',
      birth:'1999',
   }
)

      
   }


   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndfroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText =  {(email) => this.setState( {email} )}
               />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               secureTextEntry
               onChangeText =  {(pass) => this.setState({pass})}
               />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.pass)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.signup(this.state.email, this.state.pass)
               }>
               <Text style = {styles.submitButtonText}> Sign Up </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default LoginScreen

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})