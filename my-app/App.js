
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainContainer from './components/MainContainer'
import Inscription from './components/auth/inscription'
import Connection from './components/auth/connection'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    
    <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
              name='Inscription'
              component={Inscription}
            />
            <Stack.Screen
              name='Connection'
              component={Connection}
            />
            
            </Stack.Navigator>
    </NavigationContainer>
    <MainContainer />
    </>
  )
}

