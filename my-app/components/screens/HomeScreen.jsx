
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inscription from '../auth/inscription';
import Connection from '../auth/connection';

const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation }) {
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
            </>
    );
}