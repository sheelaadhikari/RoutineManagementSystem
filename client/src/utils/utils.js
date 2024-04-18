// Create a 24x20 array filled with zeros
export const createArray=(rows,columns)=> {
    let array = [];
    for (let i = 0; i < rows; i++) {
      array[i] = [];
      for (let j = 0; j < columns; j++) {
        array[i][j] = 0;
      }
    }
    return array;
  }
  
  
  