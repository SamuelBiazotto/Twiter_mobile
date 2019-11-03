import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component {
   state = {
      'useraname': ''
   };

   handleInputChange = username => {
      this.setState({ username });
   }

   async componentDidMount() {
      const username = AsyncStorage.getItem('@username');

      if (username)
         this.props.navigation.navigate('LogedIn');
   }

   handleSubmit = async () => {
      const username = this.state;

      if (!username.length) return;

      await AsyncStorage.setItem('@username', username);

      this.props.navigation.navigate('Timeline')
   }

   render() {
      return (
         <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.content}>
               <View>
                  <Icon name='twitter' size={64} color='#4BB0EE'></Icon>
               </View>
               <TextInput
                  style={styles.input}
                  placeholder='Username'
                  value={this.state.useraname}
                  onChangeText={this.handleInputChange}
                  onSubmitEditing={this.handleSubmit}
                  returnKeyType='send' />
               <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
                  <Text style={styles.buttonText}>Entrar</Text>
               </TouchableOpacity>
            </View>
         </KeyboardAvoidingView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FFF"
   },

   content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 30
   },

   input: {
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 15,
      alignSelf: "stretch",
      marginTop: 30
   },

   button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#4BB0EE",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
   },

   buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
   }
});