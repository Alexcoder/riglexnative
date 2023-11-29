import { StatusBar } from 'expo-status-bar';
import { NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StateContext } from "./STATE/chat/context/post";
import { ContextProvider} from "./STATE/cementing/context/Context";
import Header from "./Component/cementing/Header/Header";
import Navbarr from './Component/cementing/Navbarr/Navbar';
import Footer from './Component/cementing/Footer/Footer';
import Sidebar from './Component/cementing/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import { store } from "./STATE/chat/redux/store"

import CasingJob from './Component/cementing/CasingJob/Job';


export default function App() {

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
    <StateContext>
      <ContextProvider>
        <NavigationContainer>
         <Header />
         { true && <Navbarr />}       
         {/* <Sidebar/> */}
         <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="casingjob" component={CasingJob} />
         </Stack.Navigator>
        <StatusBar style="auto" />
        <Footer/>
       </NavigationContainer> 
     </ContextProvider>
  </StateContext>
  </Provider>
  );
}

