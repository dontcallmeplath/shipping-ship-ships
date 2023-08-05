import { getDocks } from "./database.js";
import { getHaulerArray } from "./listhaulers.js";
import { getHaulers } from "./database.js";

const docksArray = getDocks();
const haulersArray = getHaulers();
const arrayOfHaulerNames = getHaulerArray();

export const dockList = () => {
  let docksHTML = `<ul id="docks">`;
  for (const dock of docksArray) {
    docksHTML += `<li data-type="dock" data-id="${dock.id}"  
    data-location="${dock.location}" data-loading="false"> The dock at ${dock.location} can hold ${dock.volume} million tons of cargo </li>`;
  }
  docksHTML += "</ul>";
  return docksHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "dock") {
    if (itemClicked.dataset.loading === "false") {
      notLoadingMsg(itemClicked);
    } else {
      nameStateHaulerMsg(itemClicked);
    }
  }
});

// upon click displays message re dock name + loading state + current hauler
// upon click dislays message re dock name, loading state, enumerates haulers if multiple
const nameStateHaulerMsg = (item) => {
  let msgString = `The ${item.dataset.location} dock is currently unloading`;
  for (const hauler of haulersArray) {
    if (parseInt(item.dataset.id) === hauler.dockid) {
      msgString += `${hauler.name}`;
      for (const ship of shipsArray) {
        if (hauler.id === ship.haulerid) {
          msgString += `which is carrying ${ship.name}`;
        }
      }
    }
  }
  return (item.innerHTML = msgString);
};

// upon click displays message re dock name and loading state
const notLoadingMsg = (item) => {
  item.innerHTML = `The ${item.dataset.location} dock is currently unloading nothing`;
};
