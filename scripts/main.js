import { dockList } from "./listdocks.js";
import { haulerList } from "./listhaulers.js";
import { shipList } from "./listships.js";

const dockParentElement = document.querySelector("#docks");
dockParentElement.innerHTML = dockList();
const haulerParentElement = document.querySelector("#haulers");
haulerParentElement.innerHTML = haulerList();
const shipParentElement = document.querySelector("#ships");
shipParentElement.innerHTML = shipList();
