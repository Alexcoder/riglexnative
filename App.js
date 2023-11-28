import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View , ScrollView, Button, } from 'react-native';
import { StateContext } from "./STATE/chat/context/post";
import { ContextProvider} from "./STATE/cementing/context/Context";
import Header from "./Component/cementing/Header/Header";
import Navbarr from './Component/cementing/Navbarr/Navbar';
import Footer from './Component/cementing/Footer/Footer';
import Sidebar from './Component/cementing/Sidebar/Sidebar';

export default function App() {
// const navigation = useNavigation();
// console.log(navigation)
  const Stack = createStackNavigator();
  // const Drawer = createDrawerNavigator();
  return (
    <StateContext>
      <ContextProvider>
        <NavigationContainer>
        <Header />
        { true && <Navbarr />}       
        {/* <Sidebar/> */}
         <Stack.Navigator
          screenOptions={{
            // header: ()=> <Header/>,
            headerShown: false
          }}
          >
         {/* <Drawer.Navigator drawerContent={() => <Sidebar/>}> */}
            <Stack.Screen name="header" component={Header} />
         {/* </Drawer.Navigator> */}
         </Stack.Navigator>
          <StatusBar style="auto" />
          <Footer/>
       </NavigationContainer> 
     </ContextProvider>
  </StateContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:"center",
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
