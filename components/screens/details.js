import { StyleSheet, View, Image } from "react-native";
import TextWhite from "../textWhite";
import Boton from "../boton";
import { useRoute } from "@react-navigation/native";

export default function Details() {
  const route = useRoute();
  const { noticia } = route.params || {}; // ⬅️ esto evita errores si está undefined

  if (!noticia) {
    return (
      <View style={styles.container}>
        <TextWhite texto="No se encontró la noticia" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextWhite texto={noticia.title} />
      <Image source={{ uri: noticia.url }} style={styles.img} />
      <TextWhite texto={noticia.date} />
      <TextWhite texto={noticia.explanation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(7,26,93)",
    paddingHorizontal: 15,
    marginTop: 15,
    padding: 10,
    borderColor: "#fc3d21",
    borderWidth: 2,
    borderRadius: 10,
  },
  img: {
    alignSelf: "center",
    width: 300,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});
