import Mars from './Mars';
import MarsDetails from './MarsDetails';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Mars: {
      screen: Mars,
    },
    MarsDetails: {
      screen: MarsDetails,
      navigationOptions: () => ({
        headerTitle: 'Mars Details',
      }),
    },
  },
  {
    defaultNavigationOptions: () => ({
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: '#e4e3eb',
      },
    }),
  },
);

export default createAppContainer(AppNavigator);
