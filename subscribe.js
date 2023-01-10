console.log("The page is working  ");


let t = () => {
    let p = document.getElementById("col");
    p.setAttribute("class", "wipro")
}

let frm = document.getElementById("feedback");
let p = () => {
    let p = document.getElementById("drop");
    p.setAttribute("class", "wipro")
}

let s = () => {
    let ps = document.getElementById("texts");
    ps.setAttribute("class", "wipro")

}

let sp = false;
function formValidation() {
    let frm = document.getElementById("feedback");
    let uid = document.getElementById("col");
    console.log(uid);
    let ucountry = document.getElementById("drop");
    console.log(ucountry);
    let text = document.getElementById("texts");
    console.log(text);
    if (Validate(uid)) {
        if (countryselect(ucountry)) {
            if (textArea(text)) {
                let but = document.createElement("button");
                but.setAttribute("class", "sub")
                but.setAttribute("onclick", "sub()")
                but.innerHTML="Submit";
                console.log(but);
                // frm.appendChild(but);
                let buts = document.getElementById("checks");
                buts.replaceWith(but);
                console.log(frm);
                sp = true;

            }

        }
    }
    else {
        document.getElementById("feedback").reset();

    }

}



function countryselect(ucountry) {
    if (ucountry.value == "default") {
        alert('Select a option from the list');
        ucountry.focus();
        return false;
    }
    else {
        return true;
    }
}

function Validate(uemail) {
    let numbers = /^[0-9]+$/;
    let mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (uemail.value.match(mailformat) || uemail.value.match(numbers)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address or number !");
        uemail.focus();
        return false;
    }
}

function textArea(id) {
    let letters = /^[0-9a-zA-Z]+$/;
    if (id.value.match(letters)) {
        console.log(id.value);
        return true;
    }
    else {
        alert("Enter something inside the text");
    }

}

function sub() {
    if (sp == true) {
        frm.submit();
        frm.setAttribute("action", "index.html");
        document.getElementById("feedback").reset();
    }

}