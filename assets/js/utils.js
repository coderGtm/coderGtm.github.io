function sendMail() {
    subject = document.getElementById("subject").value;
    msg = document.getElementById("message").value;
    if (subject.trim() == "" || msg.trim() == "") {
        alert("Please fill both the fields.");
        return;
    }
    window.open("mailto:gautammehta0000@gmail.com?subject="+subject+"&body="+msg);
}
