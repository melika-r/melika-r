function hideIcon(){
    if(location.href === 'http://127.0.0.1:5500/moplay/index-2.html'){
        document.getElementById("logo-mode").style.display = "block";
        document.getElementById("icon-back").style.display = "none";
    }else{
         document.getElementById("logo-mode").style.display = "none";
         document.getElementById("icon-back").style.display = "block";
    };
};
hideIcon();