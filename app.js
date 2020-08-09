var score=0;

function q1Green(){
    document.getElementById("q1Green").style.backgroundColor="lightgreen";
    score++;
}
function q1Red(){
    document.getElementById("q1Green").style.backgroundColor="lightgreen";
    var q1Red=document.getElementsByClassName("q1Red")
    for (let i = 0; i < q1Red.length; i++) {
        q1Red[i].style.backgroundColor="tomato";
    }
}
function q2Green(){
    document.getElementById("q2Green").style.backgroundColor="lightgreen";
    score++;
}
function q2Red(){
    document.getElementById("q2Green").style.backgroundColor="lightgreen";
    var q2Red=document.getElementsByClassName("q2Red")
    for (let i = 0; i < q2Red.length; i++) {
        q2Red[i].style.backgroundColor="tomato";
    }
}
function q3Green(){
    document.getElementById("q3Green").style.backgroundColor="lightgreen";
    score++;
}
function q3Red(){
    document.getElementById("q3Green").style.backgroundColor="lightgreen";
    var q3Red=document.getElementsByClassName("q3Red")
    for (let i = 0; i < q3Red.length; i++) {
        q3Red[i].style.backgroundColor="tomato";
    }
}

function check(){
    alert("Your Total Score is "+score)
}