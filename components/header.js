
import { Image, StyleSheet, Text, View } from "react-native";

export default Header = (props) => {
  const { texto = "Home" } = props;
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.text}>{texto}</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image
          source={require("../assets/nasalogo.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 70,
    height: 70,
  },
  titulo: {
    flex: 1,
    alignItems: "flex-start",
  },
  imgcontainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});