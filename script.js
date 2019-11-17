function hideFooter(){
    document.getElementById("webfooter").style.display= 'none'; 
    var userClickedHideFooter = 1; 

    localStorage.setItem("footerClicked", userClickedHideFooter);
}

if (localStorage.getItem("footerClicked") === 1){
    document.getElementById("webfooter").style.display='none'; 
}