 
function addToList(){
    //get text value from input
    let txt = document.getElementById('myInput').value;

    if(txt!=''){
        document.getElementById('myInput').value = '';

        //create list element
        let newLi = document.createElement('li');

        //add text to it
        newLi.innerHTML = txt;

        //select where to add
        let parent = document.getElementById('myList');
        parent.appendChild(newLi);
    } 

}