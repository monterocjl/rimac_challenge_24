const BASE_URL = "https://rimac-front-end-challenge.netlify.app/api";

export const fetchPlans = async () => {
  try {
    const response = await fetch(`${BASE_URL}/plans.json`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
