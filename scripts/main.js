function convertToTravelWorld() {
    elem = document.getElementById("hello");
    interval1 = setInterval(function() {
        txt = elem.textContent;
        if (txt!="") {
            elem.textContent = txt.slice(0,-1);
        }
        else {
            clearInterval(interval1);
            targetString = "<Travel, World!>";
            interval2 = setInterval(function() {
                txt = elem.textContent;
                if (txt!=targetString) {
                    elem.textContent = txt+targetString[txt.length];
                }
                else {
                    clearInterval(interval2);
                }
            },200);
        }
    },200);
}


AOS.init();
setTimeout(convertToTravelWorld,3000);