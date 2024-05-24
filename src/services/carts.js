const API_BASE_URL = "http://localhost:3005/api";

const getCarts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/carts`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching carts:", error);
    throw error;
  }
};

export default {
  getCarts,
};
