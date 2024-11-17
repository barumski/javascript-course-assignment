import { RAINY_DAYS_API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateJackets } from "./generateJackets.mjs";

let jackets = [];
let genderFilter = 'All';

//Fetch data from API
async function main() {
  jackets = await fetchData(RAINY_DAYS_API_URL);
  generateJackets(jackets, genderFilter);
}

const FilterAllGenderButton = document.getElementById('filter-all');
const FilterMenGenderButton = document.getElementById('filter-men');
const FilterWomenGenderButton = document.getElementById('filter-women');

FilterAllGenderButton.addEventListener('click', () => {
  genderFilter = 'All';
  generateJackets(jackets, genderFilter);
});
FilterMenGenderButton.addEventListener('click', () => {
  genderFilter = 'Male';
  generateJackets(jackets, genderFilter);
});
FilterWomenGenderButton.addEventListener('click', () => {
  genderFilter = 'Female';
  generateJackets(jackets, genderFilter);
});

main();