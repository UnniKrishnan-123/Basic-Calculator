function clee()
{
    document.getElementById("tb").value="";
}
function display(a){
    document.getElementById("tb").value+=a;
}
function compute(){
    let a=document.getElementById("tb").value;
    let b=eval(a);
    document.getElementById("tb").value=b;
}

alert("WELCOME")