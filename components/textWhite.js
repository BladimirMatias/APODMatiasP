//recibe texto y lo mueste de color blanco, y en tamaño variable (fontsize)
import { Text } from "react-native";

export default TextWhite = ({ texto }) => {
  return <Text style={{ color: "white", padding: 3 }}>{texto}</Text>;
};