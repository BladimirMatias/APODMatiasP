const apiKey = "Bl3P3boLdDPpBcESafqmtSBdl2GRbxEYGhkDHTUG"; //ingresa a la pagina web y solicita un apikey
const api = "https://api.nasa.gov/planetary/apod";//esto tambien esta en la pagina

//hacer que la funcion pueda solicitar muchas imagenes ó hacer otra funcion

const fetchapod = async () => { //siempre que trabajamos con peticiones es asincrono - asyng await
  //bloque trycatch
  try {
    //intentar hacer esto
    //solicitamos informacion al la url
    const response = await fetch(`${api}?api_key=${apiKey}`);
    //trasfotmar la respuesta en datos que js pueda entender
    const data = await response.json();
    //devolvemos el data para ser usado
    return data;
  } catch (
    error //capturar el error en "error"
  ) {
    //trato el error
    console.log("este error viene de fechtapod.js", error);
  } finally {
    //opcional
  }
};
export default fetchapod;

