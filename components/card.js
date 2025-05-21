import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import TextWhite from "./textWhite";
import Boton from "./boton";

export default function Card({ title, date, imageUrl, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextWhite texto={title} />
        <TextWhite texto={date} />
        <Boton onPress={onPress} />
      </View>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{ uri: imageUrl }}
        />
      </View>
    </View>
  );
}
