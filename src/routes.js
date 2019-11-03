import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation' 

import Login from './pages/login';
import Timeline from './pages/timeline';
import New from './pages/new';
import Teste from './pages/swipe';
const Routes = createAppContainer(
   createSwitchNavigator({
      Login,
      LogedIn: createStackNavigator({
         // Timeline,
         // New,
         Teste,
      })
   })
);

export default Routes;