const parsePriceToNumber = stringPrice => {
  const price = parseInt(stringPrice.split(" ")[0]);
  return price;
};

export default parsePriceToNumber;
