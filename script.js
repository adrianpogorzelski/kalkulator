const obliczWynik = () => {
    let kwota = document.getElementById("kwota").value;
    let dlugosc = document.getElementById("dlugosc").value;
    let oprocentowanie = document.getElementById("oprocentowanie").value / 100;
    let okres = document.getElementById("okres");
    let wybranyOkres = okres.options[okres.selectedIndex].value;
    let realneOprocentowanie;

    if (wybranyOkres == "dni") {
        realneOprocentowanie = oprocentowanie/365;
    } else if (wybranyOkres == "miesiace") {
        realneOprocentowanie = oprocentowanie/12;
    } else {
        realneOprocentowanie = oprocentowanie;
    }

    let odsetki = (kwota * dlugosc * realneOprocentowanie).toFixed(2);
    let podatekRazem = (odsetki * 0.19).toFixed(2);
    let zysk = (odsetki - podatekRazem).toFixed(2);

    document.getElementById("wynikKwota").innerHTML = "<strong>" + kwota + " zł </strong>";
    document.getElementById("wynikOdsetki").innerHTML = "<strong>" + odsetki + " zł </strong>";
    document.getElementById("wynikPodatek").innerHTML = "<strong>" + podatekRazem + " zł </strong>";
    document.getElementById("wynikZysk").innerHTML = "<strong>" + zysk + " zł </strong>";
    document.getElementById("wynikRazem").innerHTML = "<strong>" + (kwota + zysk) + "zł </strong>";

   /*
    document.getElementById("wynik").innerHTML =
        "Dla inwestycji " + kwota + " zł:" +
        "<br><br>Zysk: <strong>" + wynik + "</strong> zł" +
        "<br><br>Podatek: " + (0.19 * kwota * dlugosc * realneOprocentowanie).toFixed(2) + " zł (jeśli uwględniony)" +
        "<br><br>Suma na koniec: " + razem + " zł";


        */
}
