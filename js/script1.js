function login(){
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("pwd").value;
    if (user === "admin" && pwd === "secret"){
        alert ("You have successfully signed in");
    }else{
        alert ("Invalid Username or Password");
    }
}

let temp = 5;
temp = "dog";

function m1(){
    let temp2 = true;
    console.log(temp);

}

console.log(temp);
