import { getDocks } from "./database.js";
import { getHaulerArray } from "./listhaulers.js";

const docks = getDocks();
export const dockList = () => {
  let docksHTML = `<ul id="docks">`;
  for (const dock of docks) {
    docksHTML += `<li data-id="${dock.id}" data-type="dock"> The dock at ${dock.location} can hold ${dock.volume} million tons of cargo </li>`;
  }
  docksHTML += "</ul>";
  return docksHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // display message re dock name + loading state + current hauler
});
