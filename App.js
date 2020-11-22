// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';


import AppText from './app/components/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppButton from './app/components/AppButton';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountsScreen from './app/screens/AccountsScreen';
import ListingsScreen from './app/screens/ListingsScreen';


export default function App() {
  return (
    <ListingsScreen />
  );
}

