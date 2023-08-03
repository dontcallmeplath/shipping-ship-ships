import { getDocks } from "./database.js";

const docks = getDocks();
export const dockList = () => {
  let docksHTML = "<ul>";
  for (const dock of docks) {
    docksHTML += `<li> The dock at ${dock.location} can hold ${dock.volume} million tons of cargo </li>`;
  }
  docksHTML += "</ul>";
  return docksHTML;
};
