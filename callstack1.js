function a(){
    b();
}

function b(){
    c();
}

function c()
{
    console.log("Funcion C");
}

function x(){
    y();
}

function y(){
    z();
}

function z(){
    console.log("Funcion Z");
}

setTimeout(x,0);
a();