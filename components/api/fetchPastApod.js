const apiKey = "Bl3P3boLdDPpBcESafqmtSBdl2GRbxEYGhkDHTUG";
const api = "https://api.nasa.gov/planetary/apod";

export const fetchPastAPOD = async (days = 7) => {
  try {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 1); // ⛔️ Excluir hoy

    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days + 1); // ⬅ 7 días *antes* del nuevo endDate

    const formatDate = (date) => date.toISOString().split("T")[0]; // YYYY-MM-DD

    const response = await fetch(
      `${api}?api_key=${apiKey}&start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}&thumbs=true`
    );

    const data = await response.json();

    // Ordenar de más reciente a más vieja
    const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

    return sortedData;
  } catch (error) {
    console.error("Error fetching past APODs:", error);
    return [];
  }
};
