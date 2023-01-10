let re = () => {
    let t = document.getElementById("number");
    console.log(t);
    t.reset();
}
let frm = document.getElementById("register");

function formValidation() {
    let frm = document.getElementById("register");
    let numValidate = document.getElementById("number");
    if (allnumeric(numValidate)) {
        // frm.submit();
        // frm.setAttribute("action","index.html");
    }
    else {
        document.getElementById("registration").reset();
    }
}

function allnumeric(num) {
    let numbers = /^[0-9]+$/;
    if (num.value.match(numbers)) {
        return true;
    }
    else {
        alert("Only numbers can be sumbitted here");
        num.focus();

        return false;
    }
}

let s = document.cookie = "7676913327";
let sts = document.cookie = "8824099201";
let os = document.cookie = "9742739924";
let php = document.cookie = "9909322845";
console.log(typeof s);
// let st = Number.parseInt(s);
// console.log(typeof(st))
let flag = 0;
let cook = () => {
    let num = document.getElementById("number");
    for (let i = 0; i < 3; i++) {
        if (num.value.match(s) || num.value.match(sts) || num.value.match(os) || num.value.match(php)) {
            frm.submit();
            frm.setAttribute("action", "index.html");
            flag = 1;

        }
        else {
            continue;

        }
    }

    if (flag != 1) {
        alert("Account on this number does not exist");
        let ele = document.createElement("button");
        ele.setAttribute("class", "footBut");
        let ss = document.getElementById("news");
        news.replace(ele);
        let pp = document.getElementById("yes");
        pp.remove();
    }
}


