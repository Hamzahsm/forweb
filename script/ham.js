const HAMBURGER = document.getElementById("menu");

const CHECK = document.getElementById("check").addEventListener("click", function(){
    if (HAMBURGER.style.display === 'none') {
        return HAMBURGER.style.display = 'block';
    } else {
        return HAMBURGER.style.display = 'none';
    }
}); 