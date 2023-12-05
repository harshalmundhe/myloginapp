import { View } from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar';


import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    WelcomeImage,
    StyledWelcomeContainer,
    Avatar

} from './../components/Styles';


export default function Welcome({navigation}) {



  return (
    <StyledContainer>
        <StatusBar style="light" />
        <InnerContainer>
          <WelcomeImage resizeMode="contain" source={require('./../assets/bird.jpg')}  />
            <StyledWelcomeContainer>
            
            <PageTitle welcome={true}>Welcome</PageTitle>
            <SubTitle  welcome={true}>Test Admin</SubTitle>

            <StyledFormArea>
              <Avatar resizeMode="cover" source={require('./../assets/logo.jpg')} />
              <StyledButton onPress={() => {
                console.log("logout pressed");
                navigation.navigate('Login');
                }}>
                <ButtonText>Logout</ButtonText>
              </StyledButton>
            </StyledFormArea>
            </StyledWelcomeContainer>
        </InnerContainer>
    </StyledContainer>
  )
}

