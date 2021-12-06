var seta = document.querySelector(".seta");
var seta2 = document.querySelector(".seta2");
var seta3 = document.querySelector(".seta3");
var hiddenBar = document.querySelector(".hiddenBar");
var hiddenBar2 = document.querySelector(".hiddenBar2");
var hiddenBar3 = document.querySelector(".hiddenBar3");

seta.addEventListener ("click", function () {
    if(seta.classList.contains('active')) {
        seta.classList.remove('active');
        hiddenBar.classList.remove('active');
    } else { 
        seta.classList.add('active');
        hiddenBar.classList.add('active');
    }    
});

seta2.addEventListener ("click", function () {
    if(seta2.classList.contains('active')) {
        seta2.classList.remove('active');
        hiddenBar2.classList.remove('active');
    } else { 
        seta2.classList.add('active');
        hiddenBar2.classList.add('active');
    }    
});

seta3.addEventListener ("click", function () {
    if(seta3.classList.contains('active')) {
        seta3.classList.remove('active');
        hiddenBar3.classList.remove('active');
    } else { 
        seta3.classList.add('active');
        hiddenBar3.classList.add('active');
    }    
});




