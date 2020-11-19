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


export default function App() {
  return (
    <ViewImageScreen />
  );
}

