import { getShips } from "./database.js";

const ships = getShips();
export const shipList = () => {
  let shipHTML = "<ul>";
  for (const ship of ships) {
    shipHTML += `<li>${ship.name}</li>`;
  }
  shipHTML += "</ul>";
  return shipHTML;
};
