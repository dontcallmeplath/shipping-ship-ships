const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    {
      id: 1,
      name: "Pioneering Spirit",
      dockid: 4,
      loading: [true, false],
    },
    {
      id: 2,
      name: "Hauly McHaulface",
      dockid: 3,
      loading: [true, false],
    },
    {
      id: 3,
      name: "Seawise Giant",
      dockid: 2,
      loading: [true, false],
    },
    {
      id: 4,
      name: "The Revenge",
      dockid: 1,
      loading: [true, false],
    },
  ],
  cargoShips: [
    {
      id: 1,
      name: "Corona Austrina",
      haulerid: 2,
    },
    {
      id: 2,
      name: "Camelopardalis",
      haulerid: 4,
    },
    {
      id: 3,
      name: "Canes Venatici",
      haulerid: 1,
    },
    {
      id: 4,
      name: "Tranquility",
      haulerid: 3,
    },
    {
      id: 5,
      name: "Serenity",
      haulerid: 4,
    },
    {
      id: 6,
      name: "Spatial Delivery",
      haulerid: 1,
    },
    {
      id: 7,
      name: "Epsilon Eridani",
      haulerid: 3,
    },
    {
      id: 8,
      name: "Panamax",
      haulerid: 2,
    },
    {
      id: 9,
      name: "Handymax",
      haulerid: 3,
    },
    {
      id: 10,
      name: "Aframax",
      haulerid: 1,
    },
  ],
};

export const getDocks = () => {
  return database.docks.map((dock) => ({ ...dock }));
};

export const getHaulers = () => {
  return database.haulers.map((hauler) => ({ ...hauler }));
};

export const getShips = () => {
  return database.cargoShips.map((ship) => ({ ...ship }));
};
