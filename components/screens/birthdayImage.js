import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image, ScrollView } from "react-native";
import Layout from "../layout/layout";
import Header from "../header";
import TextWhite from "../textWhite";

const apiKey = "Bl3P3boLdDPpBcESafqmtSBdl2GRbxEYGhkDHTUG";

export default function Birthday() {
  const [fecha, setFecha] = useState("");
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState("");

  const buscarImagen = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${fecha}`);
      const data = await response.json();

      if (data.code === 400) {
        setError("Fecha no válida o no hay imagen disponible.");
        setImagen(null);
      } else {
        setImagen(data);
        setError("");
      }
    } catch (err) {
      setError("Error al buscar imagen.");
      setImagen(null);
    }
  };

  return (
    <Layout>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <TextWhite texto="Imagen de la NASA en tu cumpleaños" />

        <TextInput
          placeholder="Ej: 2006-05-21"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={fecha}
          onChangeText={setFecha}
        />

        <Button title="Buscar imagen" onPress={buscarImagen} color="#fc3d21" />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        {imagen && (
          <View style={styles.resultado}>
            <Text style={styles.titulo}>{imagen.title}</Text>
            <Text style={styles.fecha}>{imagen.date}</Text>
            {imagen.media_type === "image" ? (
              <Image source={{ uri: imagen.url }} style={styles.img} />
            ) : (
              <Text style={styles.explicacion}>Video o contenido no disponible.</Text>
            )}
            <Text style={styles.explicacion}>{imagen.explanation}</Text>
          </View>
        )}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
  },
  input: {
    borderColor: "#fc3d21",
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  error: {
    color: "red",
    marginVertical: 10,
  },
  resultado: {
    marginTop: 20,
    padding: 10,
    borderColor: "#fc3d21",
    borderWidth: 2,
    borderRadius: 10,
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  titulo: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  fecha: {
    color: "#ccc",
    textAlign: "center",
    marginBottom: 5,
  },
  explicacion: {
    color: "white",
    marginTop: 10,
    textAlign: "justify",
  },
});
