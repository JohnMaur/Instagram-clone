import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import Home from './screen/Home';
import Search from './screen/Search';
import Plus from './screen/Plus';
import Video from './screen/Video';
import Profile from './screen/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={CustomTabBar}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Tab.Screen name="Plus" component={Plus} options={{ headerShown: false }} />
        <Tab.Screen name="Video" component={Video} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Define your custom bottom navigation bar component
function CustomTabBar({ state, descriptors, navigation }) {
  const images = {
    Home: require('./icon/home.png'),
    Search: require('./icon/search.png'),
    Plus: require('./icon/more.png'),
    Video: require('./icon/video.png'),
    Profile: require('./img/profile1.jpg'),
  };

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const borderRadius = route.name === 'Profile' ? 12 : 0; // Conditionally set border radius

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabButton}
          >
            <ImageBackground
              source={images[route.name]}
              style={[styles.profileImage, { borderRadius }]} // Apply border radius conditionally
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  profileImage: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
});
