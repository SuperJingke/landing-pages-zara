function mySubscription(){
    var txt;
    if (confirm("I will join the mailing list today!")) {
        txt ="Congrats!You are now subscribed to Zara.com";

    } else {
        txt ="Subscribe today to get 10% off! Try one more time.";
    }
    document.getElementById("indicator").innerHTML = txt;

}