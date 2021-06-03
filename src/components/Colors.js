const colorArray = [
  {
    name: "Red",
    hex: "#e6194B",
  },
  {
    name: "Green",
    hex: "#3cb44b",
  },
  {
    name: "Yellow",
    hex: "#ffe119",
  },
  {
    name: "Blue",
    hex: "#4363d8",
  },
  {
    name: "Orange",
    hex: "#f58231",
  },
  {
    name: "Purple",
    hex: "#911eb4",
  },
  {
    name: "Cyan",
    hex: "#42d4f4",
  },
  {
    name: "Magenta",
    hex: "#f032e6",
  },
  {
    name: "Lime",
    hex: "#bfef45",
  },
  {
    name: "Pink",
    hex: "#fabed4",
  },
  {
    name: "Teal",
    hex: "#469990",
  },
  {
    name: "Lavender",
    hex: "#dcbeff",
  },
  {
    name: "Brown",
    hex: "#9A6324",
  },
  {
    name: "Beige",
    hex: "#fffac8",
  },
  {
    name: "Maroon",
    hex: "#800000",
  },
  {
    name: "Mint",
    hex: "#aaffc3",
  },
  {
    name: "Olive",
    hex: "#808000",
  },
  {
    name: "Apricot",
    hex: "#ffd8b1",
  },
  {
    name: "Navy",
    hex: "#000075",
  },
  {
    name: "Black",
    hex: "#000000",
  },
];

const get10RandomColors = () => {
  const result = [...colorArray];
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result.slice(0, 10);
};

export default get10RandomColors;
