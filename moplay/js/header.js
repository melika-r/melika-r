function hideIcon(){
    if(location.pathname.endsWith('index-2.html') ){
        document.getElementById("logo-mode").style.display = "block";
        document.getElementById("icon-back").style.display = "none";
    }else{
         document.getElementById("logo-mode").style.display = "none";
         document.getElementById("icon-back").style.display = "block";
    };
};
window.addEventListener('load', hideIcon);
