¡Hola Matías! Con gusto te armo un README profesional y claro para tu proyecto de app NASA. Lo podés copiar y pegar directamente en tu repositorio de GitHub.

---

## 🌌 NASA APOD Mobile App

Esta aplicación muestra la **imagen astronómica del día** (APOD - Astronomy Picture of the Day) provista por la NASA, junto a un historial de los últimos 7 días y la posibilidad de buscar la imagen del día de tu cumpleaños. Fue desarrollada en **React Native** como parte de un proyecto educativo.

---

### 📱 Características

* 🔭 **Imagen del día** directamente desde la API de NASA.
* 🗓️ **Imágenes de los últimos 7 días**, navegables desde la misma app.
* 🎂 **Función "Mi cumpleaños"**: buscá la imagen del día de tu nacimiento.
* 📋 Detalles completos de cada imagen: título, fecha, explicación e imagen en alta calidad.
* 💅 Estilo visual adaptado a la temática espacial, con componentes reutilizables y navegación fluida.

---

### ⚙️ Tecnologías utilizadas

* **React Native**
* **React Navigation**
* **Fetch API**
* **API NASA APOD** ([https://api.nasa.gov](https://api.nasa.gov))
* **Expo (opcional si lo estás usando)**

---

### 📦 Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/tuusuario/nasa-apod-app.git
cd nasa-apod-app
```

2. Instalá las dependencias:

```bash
npm install
# o
yarn install
```

3. Ejecutá la app:

```bash
npx react-native run-android
# o si usás Expo
npx expo start
```

---

### 🔑 API Key de NASA

Para usar la API, necesitás una API Key gratuita.

1. Ingresá a [https://api.nasa.gov](https://api.nasa.gov) y solicitá tu propia key.
2. Reemplazá tu key en el archivo `fetchapod.js`:

```js
const apiKey = "TU_API_KEY_AQUI";
```

---

### 📁 Estructura del proyecto (simplificada)

```
/api
  └── fetchapod.js
  └── fetchPastApod.js

/components
  └── visor.js
  └── textWhite.js
  └── boton.js

/screens
  └── Home.js
  └── Details.js
  └── Birthday.js

/layout
  └── layout.js
  └── header.js
```

---

### 🧪 Funcionalidades extra (bonus)

* Navegación dinámica con parámetros.
* Manejo de errores con try/catch.
* Vista de detalle reutilizando componentes.
* Validación de fechas para búsqueda por cumpleaños.

---

### ✍️ Autor

* **Matías Parra** – Estudiante EPET N°12
* Proyecto guiado por el profesor **Cristian Alarcón**

---

### 📄 Licencia

Este proyecto es educativo y de código abierto. Podés reutilizarlo y modificarlo con fines personales o académicos.

---

¿Querés que también incluya capturas de pantalla o instrucciones específicas para subir a Play Store más adelante? También puedo ayudarte con eso.
