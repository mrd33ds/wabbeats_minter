const { MODE } = require("./blendMode.js");
const description =
  "White Rabbit Poker Club is a an NFT collection of 10k unqiue Rabbits. Join the club and lets get rabid.";
const baseUri = "ipfs://";

const layerConfigurations = [
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Background" },
      { name: "Fur" },
      { name: "Mouths" },
      { name: "Eyes" },
      { name: "Hats" },
      { name: "Clothing" },
      { name: "Earrings" },
    ],
  },
];

const format = {
  width: 2048,
  height: 2048,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "*";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
