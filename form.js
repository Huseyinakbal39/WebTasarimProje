function control1() {
    var x = document.forms["Form"]["name"].value;
    if (x == "") {
        alert("İsim boş bırakılamaz!!!");
        return false;
    }

    var y = document.forms["Form"]["email"].value;
    if (y == "") {
        alert("Mail Kısmı Boş bırakılamaz!!!");
        return false;
    }
    if ((!(document.getElementById('kadın').checked) && (!(document.getElementById('erkek').checked)))) {
        alert("Cinsiyet alanı boş bırakılamaz");
        return false;

    }
    
    var email = document.email.value;
    var mailchck=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if ( mailchck<1 || dotpos<mailchck+2 || dotpos+2>=email.length )
    {
        alert("Geçerli email adresi girin<br>Örnek  ####@hotmail.com");
        return false;
    }   
}

