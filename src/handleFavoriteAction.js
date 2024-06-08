import { setLocal } from "./localStorage_funcs";

export function handleFavoriteAction(arrParam) {
  const [product, arr, func, nameLocal] = arrParam;
  const item = arr.find((item) => item.id === product.id);
  
  if(item) {
    const newArray = [...arr];
    alterarArray(newArray, product);
    func(newArray);
    nameLocal && setLocal(nameLocal, newArray);
  } else {
    const newElementInArray = [...arr, product];
    func(newElementInArray);
    nameLocal && setLocal(nameLocal, newElementInArray);
  }
} 

function alterarArray(array, obj) {
  return array.splice(array.indexOf(obj), 1)
}