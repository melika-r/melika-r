function hideImge(){
    const currentPage = window.location.pathname;
    if(currentPage === "/moplay/index.html"){
        document.getElementById("logo-dark-mode").style.display = "block";
        document.getElementById("logo-light-mode").style.display = "block";
        document.getElementById("icon-back").style.display = "none";
    }else{
         document.getElementById("logo-dark-mode").style.display = "none"
         document.getElementById("logo-light-mode").style.display = "none";
         document.getElementById("icon-back").style.display = "block";
    }
}
hideImge();