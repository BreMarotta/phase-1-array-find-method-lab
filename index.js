//Will loop through array
//Find any time the result: "W"
//Return year when result: "W"
//Will return undefined if no "W"

//function superbowlWin(array){
   // const win = array.find(object => object.result === "W");
  //  return win;
//}

function superbowlWin(array){
    const win = array.find(object => object.result === "W");
    if (win){
        return win.year; 
    } else {
        return undefined;
    }
}


//function isW(object){
   // return object.result === "W";
//}
