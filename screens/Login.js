import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

import {Octicons, Ionicons} from '@expo/vector-icons';

import { useState } from 'react';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox

} from './../components/Styles';

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import axios from 'axios';

const {primary, brand, darklight} = Colors;

export default function Login({navigation}) {

  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();


  const handleLogin = (credentails, setSubmitting) => {
    
    
    credentails.username = "Harshal.Mundhe@ril.com";
    credentails.password = "a8eaf5c269789a4a4618cef0b8a6f2ce5281d766a24387cbdb383c93fbd28e3b";
    credentails.jr = "aHR0cDovLzQ5LjQwLjY0LjI0NDo2MDgwL3VuaWZpZWRfdWlfZGV2";
    credentails.platform = "unified";
    credentails.otp = "680579";
    
    handleMessage(null);
     const url = "http://49.40.64.244:6080/jsso/public/index.php/login";

     axios.post(url, credentails)
     .then((response) => {
       
       
        const result = response.data;
        const {code, data, message, status} = result;

      if(!status) {
        handleMessage(message, status);
      } else {
        console.log(data['token']);
        navigation.navigate('Welcome', {...data['token']})
      }
      setSubmitting(false);
     })
     .catch(error => {
      const result = error.response.data;
      const {code, data, message, status} = result;
      handleMessage(message, status);
      setSubmitting(false);
     })
  }

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  }

  return (
    <KeyboardAvoidingWrapper>
    <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/logo.jpg')} />
            <PageTitle>MyWebsite</PageTitle>
            <SubTitle>Account Login</SubTitle>
            <Formik
              initialValues={{email:'', password:''}}
                onSubmit={(values, {setSubmitting}) => {
                  if(values.email != '' && values.password != '') {
                    handleLogin(values, setSubmitting);
                  } else {
                    handleMessage("Please fill the fields")
                    setSubmitting(false);
                  }
              }} 
              >{
                ({handleChange, handleBlur, handleSubmit,values, isSubmitting}) => (
                  (<StyledFormArea>
                    <MyTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="test@test.com"
                    placeholderTextColor={darklight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    />
                    <MyTextInput
                    label="Password"
                    icon="lock"
                    placeholder="**********"
                    placeholderTextColor={darklight}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    />
                    <MsgBox type={messageType}>{message}</MsgBox>
                    {!isSubmitting && (<StyledButton onPress={handleSubmit}>
                      <ButtonText>Login</ButtonText>
                    </StyledButton>)}
                    {isSubmitting && (<StyledButton disabled={true}>
                      <ActivityIndicator size="large" color={primary} />
                    </StyledButton>)}
                    

                  </StyledFormArea>)
                )
              }

            </Formik>
        </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}


const MyTextInput = ({label, icon,isPassword,hidePassword,setHidePassword, ...props}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand}></Octicons>
      </LeftIcon>
      <StyledInputLabel>
        {label}
      </StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => {setHidePassword(!hidePassword)}}>
          <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={darklight}></Ionicons>
        </RightIcon>
      )}
    </View>
  );
}