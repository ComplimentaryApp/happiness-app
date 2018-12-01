import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ReceiveTab from '../screens/ReceiveTab';
import GiveTab from '../screens/GiveTab';
import ProfileTab from '../screens/ProfileTab';

const TabNavigator = createBottomTabNavigator({
  Receive: { screen: ReceiveTab },
  Give: { screen: GiveTab },
  Profile: { screen: ProfileTab },
});

export default createAppContainer(TabNavigator);
