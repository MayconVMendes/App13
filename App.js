import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Forma from './src/pages/Expe';
import Expe from './src/pages/Info';
import Pessoal from './src/pages/Pessoal';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const icons = {
  Pessoal:{
    name: 'ios-home',
  },
  Formação:{
    name: 'ios-people',
  },
  Experiencia:{
    name: 'ios-call',
  }
}


export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      >
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formação' component={Forma} />
        <Tab.Screen name='Experiencia' component={Expe} />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}

