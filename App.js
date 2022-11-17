//App.js
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Pokemons from './Components/Pokemons';
import Details from './Components/Details';

const appNavigator = createStackNavigator(
  {
    Pokemons: {
      screen: Pokemons,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Pokemons',
  },
);


export default createAppContainer(appNavigator);