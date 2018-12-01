import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';

const TabNavigator = createBottomTabNavigator({
  Tab1: { screen: Tab1 },
  Tab2: { screen: Tab2 },
});

export default createAppContainer(TabNavigator);
