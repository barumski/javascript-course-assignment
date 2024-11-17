import { generateSingleJacket } from "./generateSingleJacket.mjs";

export function generateJackets(jackets, genderFilter) {
  const jacketsContainer = document.querySelector("#jacketSection");

  jacketsContainer.innerHTML = ""; 
  
  const filteredJackets = jackets.filter((currentItem) => {
    if (genderFilter === "All") {
      return true;
    }
    if (genderFilter === "Male" && currentItem.gender === "Male") {
      return true;
    }
    if (genderFilter === "Female" && currentItem.gender === "Female") {
      return true;
    }
    return false; 
  });

  filteredJackets.forEach((currentItem) => {
    const jacket = generateSingleJacket(currentItem);
    jacketsContainer.appendChild(jacket);
    console.log("Added jacket to container:", jacket); 
  });
}
