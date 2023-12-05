import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import RootStack from './navigators/RootStack';

//import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [appReady, setAppReady] = useState(true);
  const [storedCredentails, setStoredCredentails] = useState("");
  const checkLoginCredentails = () => {
      AsyncStorage.getItem("logincred")
        .then((result) => {
          if(result !== null) {
            setStoredCredentails(JSON.parse(result))
          } else {
            setStoredCredentails(null);
          }
          
        })
        .catch();
  }

  if(!appReady) {
    return null;
  } else {
    return (
      <RootStack style={styles.container}/>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});