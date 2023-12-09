import { StatusBar } from 'expo-status-bar';
import { NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { StateContext } from "./STATE/chat/context/post";
import Header from "./Component/cementing/Header/Header";
import Navbarr from './Component/cementing/Navbar/Navbar';
import Footer from './Component/cementing/Footer/Footer';
import Sidebar from './Component/cementing/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import { JobContext } from './STATE/cementing/jobContext';
// import { store } from "./STATE/chat/redux/store"
// 
import CasingJob from './Component/cementing/CasingJob/Job';
import PlugJob from "./Component/cementing/pages/Plug/Plug";
import ConversionPage from './Component/cementing/Conversion/Conversion';


export default function App() {

  const Stack = createStackNavigator();
  // const Drawer = createDrawerNavigator();

  return (
    <StateContext>
      <JobContext>
        <NavigationContainer>
         <Header />
         <Navbarr />     
         {/* <Sidebar/> */}
         <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="conversion" component={ ConversionPage } />
            <Stack.Screen name="plugjob" component={ PlugJob } />
            <Stack.Screen name="casingjob" component={ CasingJob } />
         </Stack.Navigator>
        <StatusBar style="auto" />
        <Footer/>
       </NavigationContainer> 
        </JobContext>
     </StateContext>  
  );
}

