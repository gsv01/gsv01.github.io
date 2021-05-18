

 
function decrypt(text,change){
    //add the text into a list to separate by char 
    let myList = [];

    let char;
    let charCode;
    for(let i=0 ; i <= text.length - 1 ; i++){


        //Convert the text make the changes 
        charCode = text.charCodeAt(i) - change; 
  

        //convert character code to character 
        char = String.fromCharCode(charCode);
         
        myList.push(char);
    }
 
    return myList.join(''); 
}


export {decrypt};