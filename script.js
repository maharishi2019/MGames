var userClickedHideFooter = 0; 
function hideFooter(){
    document.getElementById("webfooter").style.display= 'none'; 
    userClickedHideFooter = 1; 
}

if (userClickedHideFooter === 1){
    document.getElementById("webfooter").style.display='none'; 
}