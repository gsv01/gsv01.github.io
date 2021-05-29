

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





