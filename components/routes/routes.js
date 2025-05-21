import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Details from "../screens/details";
import Birthday from "../screens/birthdayImage";

export default Routes = () => {
  //instanciar mis vistas
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* Contenedor de tipos de vistas */}
      <Stack.Navigator>
        {/* contenedor de pilas*/}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="birthday" component={Birthday} options={{ title: "NASA en tu cumple" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};