/*Nedan finns den JavaScript som används i webbappen. Det är ETT script för varje uppdrag.
Scripten är döpta till validateNAMNPÅUPPDRAGET eller validateRummet.
OM svaret är fel så tas inte användaren vidare till nästa uppdrag.
När användaren får skriva in ett eget svar i en textruta så visas ett felmeddelande där deras svar ingår så att dom ser vad dom skrivit.
När användaren får välja ett av tre svarsalternativ står det bara att det var fel, och svarsalternativet dom valde är fortsatt markerat.    */


function validateKulturbanken() {
    let answer = document.forms["myForm"]["money"].value; 
    if (answer != "nej") {
        document.getElementById("errorMessage").innerHTML = "Det var tyvärr fel svar. Försök igen!";
        return false; 
    }
}

function validateMusikavdelningen() {
    let answer = document.forms["myForm"]["answer"].value.toLowerCase(); 
    let wrongAnswer = document.forms["myForm"]["answer"].value;
    if (answer != "b") {
        document.getElementById("errorMessage").innerHTML = wrongAnswer + " var tyvärr fel svar. Försök igen!";
        document.forms["myForm"]["answer"].value = "";
        return false; 
    }
}

function validateSkeppen() {
    let answer = document.forms["myForm"]["boats"].value; 
    if (answer != "andersson") {
        document.getElementById("errorMessage").innerHTML = "Det var tyvärr fel svar. Försök igen!";
        return false; 
    }
}

function validateRaritetskabinettet() {
    let answer = document.forms["myForm"]["room"].value; 
    if (answer != "cabinet") {
        document.getElementById("errorMessage").innerHTML = "Det var tyvärr fel svar. Försök igen!";
        return false; 
    }
}

function validateTidskrift() {
    let answer = document.forms["myForm"]["sport"].value; 
    if (answer != "fotboll") {
        document.getElementById("errorMessage").innerHTML = "Det var tyvärr fel svar. Försök igen!";
        return false; 
    }
}

function validateDigidelcenter() {
    let answer = document.forms["myForm"]["answer"].value.toLowerCase(); 
    let wrongAnswer = document.forms["myForm"]["answer"].value;
    if (answer != "a") {
        document.getElementById("errorMessage").innerHTML = wrongAnswer + " var tyvärr fel svar. Försök igen!";
        document.forms["myForm"]["answer"].value = "";
        return false; 
    }
}

function validateBarnavdelningen() {
    let answer = document.forms["myForm"]["friend"].value;
    if (answer != "tommyAnnika") {
        document.getElementById("errorMessage").innerHTML = "Det var tyvärr fel svar. Försök igen!";
        return false;
    }
}

function validateBussen() {
    let answer = document.forms["myForm"]["bussen"].value;
    if (answer != "bibblan") {
        document.getElementById("errorMessage").innerHTML = "Det var tyvärr fel svar. Försök igen!";
        return false;
    }
}