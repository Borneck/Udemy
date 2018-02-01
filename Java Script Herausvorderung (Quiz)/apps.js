
function gibAntwort(){

    var anzahlFragen = 4;
    var punkte = 0;
    var antworten = ["a", "c", "a", "a"];

    var name = document.querySelector('input[name="name"]').value;

    var frage1 = document.querySelector('input[name="frage1"]:checked');
    var frage2 = document.querySelector('input[name="frage2"]:checked');
    var frage3 = document.querySelector('input[name="frage3"]:checked');
    var frage4 = document.querySelector('input[name="frage4"]:checked');

    for(i=1; i<=anzahlFragen; i++){

        if(eval("frage"+i) == null){
            alert("Bitte Antwort " + i + " noch eingeben!!");
            return false;
        }
    }

    for(i=1; i<=anzahlFragen; i++){

        if(eval("frage"+i).value == antworten[i-1]){
            punkte++;
        }
    }

    var ergebnis = document.getElementById("ergebnis");
    ergebnis.innerHTML = "<h2>Du hast " + punkte + " erreicht sehr gut " + name + "</h2>";

    if(punkte == anzahlFragen){
        alert("Sehr Gut " + name + " du hast alles Richtig gemacht");
    }else if(punkte>=1){
        alert("Du hast " + punkte + " von " + anzahlFragen + "Punkte erreicht");
    }else{
        alert("Leider alles Falsch");
    }
    return false;

}