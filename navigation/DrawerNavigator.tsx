import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import Home from '../screens/HomeScreen';
import Favourite from '../screens/FavouriteScreen';
import TabNavigator from './TabNavigator';



const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={TabNavigator} />
      <Drawer.Screen name='Favourite' component={Favourite} />
    </Drawer.Navigator>
  )
}