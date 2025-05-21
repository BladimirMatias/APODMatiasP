import { StyleSheet, Text, View, Image } from "react-native";
import TextWhite from "./textWhite";
import Boton from "./boton";

export default Visor = ({ title, url, date, explanation, media_type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{title}</Text>
      <Text style={styles.texto}>{date}</Text>
      
      {media_type === 'image' && url ? (
        <Image source={{ uri: url }} style={styles.img} />
      ) : (
        <Text style={styles.texto}>{explanation || 'Contenido multimedia no disponible'}</Text>
      )}
      
      <Boton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 0,
    borderColor: "#fc3d21",
    borderWidth: 2,
    borderRadius: 10,
  },
  img: {
    alignSelf: "center",
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  texto: {
    paddingVertical: 5,
    color: "white",
  },
});