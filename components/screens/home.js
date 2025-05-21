import Layout from "../layout/layout";
import Header from "../header";
import Visor from "../visor";
import { useEffect, useState } from "react";
import Fetchapod from "../api/fetchapod";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { fetchPastAPOD } from "../api/fetchPastApod";
import { Button } from "react-native";


export default function Home() {
  const navigation = useNavigation(); // usás esto en lugar de pasar navigation por props
  const [imagen, setImagen] = useState({});

  useEffect(() => {
    const getimagen = async () => {
      const imagendeldia = await Fetchapod();
      setImagen(imagendeldia);
    };

    getimagen();
  }, []);

  const [pastNews, setPastNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Imagen del día
      const todayImage = await Fetchapod();
      setImagen(todayImage);
      
      // Noticias pasadas (últimos 7 días)
      const pastImages = await fetchPastAPOD(7);
      setPastNews(pastImages);
    };

    fetchData();
  }, []);


  return (
    <Layout>
      <Header />
      {/* Noticia del día */}

      <TouchableOpacity
      onPress={() => navigation.navigate("details", { noticia: imagen })}>
        <Visor title={imagen.title} url={imagen.url} date={imagen.date} media_type={imagen.media_type} />
      </TouchableOpacity>
      {/* Texto separador */}
      <Text style={{ color: "white", fontSize: 16, marginVertical: 10 }}>
        Imágenes de los últimos 7 días
      </Text>
      <Button
        title="Ver imagen de tu cumple"
        onPress={() => navigation.navigate("birthday")}
        color="blue"
      />
      
      {/* Scroll de otras noticias */}
      <ScrollView>
  {pastNews.map((noticia, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => navigation.navigate("details", { noticia })}
    >
      <Visor
        title={noticia.title}
        url={noticia.url}
        date={noticia.date}
        explanation={noticia.explanation}
        media_type={noticia.media_type}
        compact={true}
      />
    </TouchableOpacity>
  ))}
</ScrollView>
    </Layout>
  );
}
