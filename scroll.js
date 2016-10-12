function scroll(){
    var elmnt = document.documentElement;;
    var scroll =elmnt.scrollTop
    console.log(scroll);
    if(scroll >= 70){
        console.log("more thatn 70")
        document.getElementsByClassName("header")[0].style.backgroundColor = "#2d2d2d";
    }
    else {
        console.log("more under 70")
        document.getElementsByClassName("header")[0].style.backgroundColor = "";
    }
}
var doc = document.documentElement;
doc.onscroll = scroll();