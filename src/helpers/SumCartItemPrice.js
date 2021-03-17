import { DISCOUNT } from "../constant/StaticConst";

export default function (stringPrice = "1.000.000", quantity = 0) {
  const temp = ((parseInt(stringPrice.replace(/[/.]/g, "")) - DISCOUNT * quantity) * quantity)
    .toString()
    .split("")
    .reverse();
  let price = [];
  let count = 0;
  const tempLength = temp.length;
  for (let index = 0; index < tempLength; index++) {
    count++;
    if (count === 4) {
      price.push(".");
      count = 0;
      index--;
    } else price.push(temp[index]);
  }

  return price.reverse().join("");
}
