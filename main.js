function showInfo(){
  var part2 = document.getElementById('part2');
  var clickme = document.getElementById('clickme');
  var container = document.getElementById('container')

  part1.style.display = "none";
  part2.style.width = "100%";
  clickme.style.display = "none";
  container.style.display = "block";


}



function openMore(){
  var more_pop = document.getElementById('more_pop');
  var myblur = document.getElementById('myblur');
  more_pop.style.display = "block";
  myblur.style.display = "block";
}

function closeMore(){
  var more_pop = document.getElementById('more_pop');
  var myblur = document.getElementById('myblur');
  more_pop.style.display = "none";
  myblur.style.display = "none";
}


function showContactForm(){
  var showContactForm = document.getElementById('contact_form');
  showContactForm.style.display = "block";
}


function hideContactForm(){
  var showContactForm = document.getElementById('contact_form');
  showContactForm.style.display = "none";
}


function sendMail(){
  alert('Data Sent!');
}




function openLink(x){
   window.open(x);
}
