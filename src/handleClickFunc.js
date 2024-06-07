import { setLocal } from "./localStorage_funcs";

export function handleClick(arrParam) {
  const [product, arr, func, nameLocal] = arrParam;
  const item = arr.find((item) => item.id === product.id);
  
  if(item) {
    const newArray = alterarArray(arr, product);
    func(newArray);
    nameLocal && setLocal(nameLocal, newArray);
  } else {
    product.amount = 1;
    const newElementInArray = [...arr, product];
    func(newElementInArray);
    setLocal(nameLocal, newElementInArray);
    nameLocal && setLocal(nameLocal, newElementInArray);
  }
} 

function alterarArray(array, obj) {

  return array.map((item) => {
    if(item.id === obj.id) { 
      item.amount += 1;
    }
    return item;
  })
}