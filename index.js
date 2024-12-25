

let display=document.getElementById("display");
function Display(value){
    // if(display.value="ERROR PRESS AC"){
    //   display.value="ERROR PRESS AC"
    // }
    let operators=['+','-','*','%']
    if(operators.includes(display.value.slice(-1))&&operators.includes(value)){
        display.value=display.value.slice(0,-1);
    }
    // if(display.value.length==)
    display.value+=value
    // console.log(display.value)
}
function ALLclear(){
    display.value=""
}
function clearlast(){
    let str=display.value;
    display.value=str.slice(0,-1);
    // console.log(display.value)
}
function calcuate(){
    try{
    display.value=eval(display.value)}
    catch(Error){
        display.value="ERROR PRESS AC"
    }
}