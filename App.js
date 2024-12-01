import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Login/LoginScreen.js';
import HomeScreen from './HomeScreen/HomeScreen.js';
import SolicitacoesScreen from './Solicitacoes/SolicitacoesScreen.js';

  export default class App extends React.Component{

    render(){
      return (
          <SolicitacoesScreen/>
      );
    }
  }