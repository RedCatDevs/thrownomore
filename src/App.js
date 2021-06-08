import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import HomeIcon from './assets/home.png';
import CartIcon from './components/CartIcon';
import {StateProvider} from './context';
import CartScreen from './screens/Cart';
import GoodScreen from './screens/GoodScreen';
import {colors} from './variables';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{showLabel: false}}>
          <Tab.Screen
            name="Home"
            component={GoodScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Image
                  source={HomeIcon}
                  style={{tintColor: focused ? colors.green : colors.black}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={CartScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <CartIcon tintColor={focused ? colors.green : colors.black} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
