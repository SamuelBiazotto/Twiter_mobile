import React, { Component } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Api from '../services/api';
import Tweet from '../components/tweet';
import socket from 'socket.io-client';

export default class Timeline extends Component {

   static navigationOptions = ({ navigation }) => ({
      title: 'Timeline',
      headerRigth: (
         <TouchableOpacity onPress={() => navigation.navigate('New')}>
            <Icon
               style={{ marginRight: 20 }}
               name='add-circle-outline'
               size={24}
               color='4BB0EE' />
         </TouchableOpacity>
      ),
   })

   state = {
      tweets: [],
   }

   subscribeToEvents = () => {
      const io = socket('http://localhost:3000');

      io.on('tweet', data => { 
         console.log('tweet: ', data)
         this.setState({tweets: [data, ...this.state.tweets]})
      })

      io.on('like', data => { 
         this.setState({
            tweets: this.state.tweets.map(
                tweet => (tweet._id === data.id ? data : tweet)   
            )
        })
         console.log('like: ', data)
      })
   }

   async componentDidMount() {
      this.subscribeToEvents();

      await Api.get('/tweets').then(response => {
         this.setStat({
            tweets: response.data
         })
      })
   }

   render() {
      return (
         <View style={styles.container}>
            <FlatList
               data={this.state.tweets}
               keyExtractor={tweet => tweet._id}
               renderItem={({ item }) => <Tweet tweet={item}></Tweet>}
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#FFF"
   }
});