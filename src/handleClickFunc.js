export function handleClick(arrParam) {
  const item = arrParam[1].find((item) => item.id === arrParam[0].id);
  
  if(item) {
    const newArray = alterarArray(arrParam[1], arrParam[0]);
    arrParam[2](newArray);
  } else {
    arrParam[0].amount = 1;
    arrParam[2]([...arrParam[1], arrParam[0]]);
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