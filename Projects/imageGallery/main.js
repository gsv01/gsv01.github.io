

let images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg'
];

let imageIndex = 0;




function goPrev(){
    imageIndex--;
    if(imageIndex<0){imageIndex = images.length -1;}
    // Select the image projector
    let projector = document.getElementById('image_projector');
    projector.setAttribute("style","background-image: url('./gallery/" +images[imageIndex] + "')");
}


function goNext(){
    imageIndex++;
    if(imageIndex == images.length){imageIndex = 0}
    // Select the image projector
    let projector = document.getElementById('image_projector');
    projector.setAttribute("style","background-image: url('./gallery/" +images[imageIndex] + "')");
}


function changeImage(ximageIndex,id_change){
    imageIndex = ximageIndex;
    let projector = document.getElementById('image_projector');
    projector.setAttribute("style","background-image: url('./gallery/" +images[imageIndex] + "')");

    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
    let img5 = document.getElementById("img5");
    let img6 = document.getElementById("img6");


    img1.setAttribute("style","border: 2px solid white");
    img2.setAttribute("style","border: 2px solid white");
    img3.setAttribute("style","border: 2px solid white");
    img4.setAttribute("style","border: 2px solid white");
    img5.setAttribute("style","border: 2px solid white");
    img6.setAttribute("style","border: 2px solid white");



    let image_icon = document.getElementById(id_change);
    image_icon.setAttribute("style","border: 2px solid gray");
}




