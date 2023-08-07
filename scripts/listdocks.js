import { getDocks } from "./database.js";
import { getHaulers } from "./database.js";
import { getShips } from "./database.js";

const docksArray = getDocks();
const haulersArray = getHaulers();
const shipsArray = getShips();
// array containing the matched up ships on each hauler re click event msgs
const shipNamesArray = [];

// function to populate the LIs that comprise the page data re docks
export const dockList = () => {
  let docksHTML = `<ul id="docks">`;
  for (const dock of docksArray) {
    docksHTML += `<li data-type="dock" data-id="${dock.id}"  
    data-location="${dock.location}" data-loading="${dock.loading}"> The dock at ${dock.location} can hold ${dock.volume} million tons of cargo </li>`;
  }
  docksHTML += "</ul>";
  return docksHTML;
};

// function to check if something has already been clicked to prevent duplicate of info
var isClicked = false;
const clickHandler = () => {
  isClicked = true;
};

// click event to suss out if dock is loading or not and display correct msg
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "dock" && isClicked === false) {
    if (itemClicked.dataset.loading == "false") {
      notLoadingMsg(itemClicked);
    } else {
      nameStateHaulerMsg(itemClicked);
    }
  }
});

// upon click displays message re dock name + loading state + current hauler
// upon click dislays message re dock name, loading state, enumerates haulers if multiple
const nameStateHaulerMsg = (item) => {
  let msgString = `The dock at ${item.dataset.location} is currently unloading the Hauler `;
  for (const hauler of haulersArray) {
    if (parseInt(item.dataset.id) === hauler.dockid) {
      msgString += `${hauler.name}`;
      for (const ship of shipsArray) {
        if (hauler.id === ship.haulerid) {
          shipNamesArray.push(ship.name);
        }
      }
    }
  }
  if (shipNamesArray.length > 1) {
    msgString += ` which is carrying the following ships: ${shipNamesArray.join(
      " and "
    )}`;
    shipNamesArray.length = 0;
    return (item.innerHTML = msgString);
  } else {
    msgString += ` which is carrying ${ship.name} `;
    shipNamesArray.length = 0;
    return (item.innerHTML = msgString);
  }
};

// upon click displays message re dock name and loading state
const notLoadingMsg = (item) => {
  item.innerHTML = `The ${item.dataset.location} dock is not currently unloading anything`;
};
