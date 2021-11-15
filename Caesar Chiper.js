function rot13(str) {
  let empArr = "";
  let rangeAlpha ="ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let normalAlpha ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i =0;i<str.length;i++){
    if(str.slice(i,i+1)===" "||
    str.slice(i,i+1)==="!"||
    str.slice(i,i+1)==="?"||
    str.slice(i,i+1)==="."){
      empArr=empArr+str.slice(i,i+1);
    }
    else empArr = empArr+rangeAlpha.slice(normalAlpha.indexOf(
    str.slice(i,i+1))+13,normalAlpha.indexOf(
    str.slice(i,i+1))+14);
  
  }
  
  
  

    //let b = rangeAlpha.slice(normalAlpha.indexOf(
    //str.slice(0,1))+17,normalAlpha.indexOf(
    //str.slice(0,1))+18)

  return empArr;
}

console.log(rot13("SERR YBIR?"));