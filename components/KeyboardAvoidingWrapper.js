import { View, Text } from 'react-native'
import React from 'react'

import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { Colors } from './Styles';
const {primary} = Colors;

export default function KeyboardAvoidingWrapper({children}) {
  return (
    <KeyboardAvoidingView style={{flex:1, backgroundColor: primary}}>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}