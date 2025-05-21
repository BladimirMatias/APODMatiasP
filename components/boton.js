
//hacer el boton - declarar la funcion, y por ahora le dejamos un console.log

import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";

export default Boton = ({ text = "Detalles" }) => {
  const navigation = useNavigation();

  const handlerClik = () => {
    navigation.navigate("details");
  };
};