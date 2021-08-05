import cityList from "../assets/city-list.json";

const API_KEY = "18dd568b0a7d933edebc2311b5d39415";
const searchForm = document.getElementById("search");

const connectAPP = async (e) => {
  const inputValue = e.target.elements.location.value;
  try {
    const result = await cityList.filter((city) => {
      return city.name.toLowerCase() === inputValue.toLowerCase();
    });
  } catch (error) {
    console.log(error);
  }
};