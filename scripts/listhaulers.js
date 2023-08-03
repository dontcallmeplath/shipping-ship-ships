import { getHaulers } from "./database.js";

const haulers = getHaulers();
export const haulerList = () => {
  let haulerHTML = "<ul>";
  for (const hauler of haulers) {
    haulerHTML += `<li>${hauler.name}</li>`;
  }
  haulerHTML += "</ul>";
  return haulerHTML;
};
