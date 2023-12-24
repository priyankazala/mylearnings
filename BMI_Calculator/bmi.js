function BMICalculator(height,weight)
{
    if( height <= 55 || weight <=5){
        return -1;
    }
    let h= height/100;
    let sqHeight = h*h;

    let bmiValue = weight/sqHeight;
    let bmiValueRounded = bmiValue.toFixed(1);
    console.log(bmiValueRounded);
    return bmiValueRounded


};

function calc(){
let h = document.getElementById("height").value
let w = document.getElementById("weight").value
//document.getElementById("height").innerHTML =h;
//document.getElementById("weight").innerHTML = w;
//console.log(h);
//console.log(w);

if(h!= "" && w!= ""){
let result=BMICalculator(h,w);
if(result == -1){
    document.getElementById("result").innerHTML ="Input correct values";
}
else if(result<=18.5){
    document.getElementById("result").innerHTML ="you are underweight";
    
    console.log("you are underweight");
}
else if(18.5<result && result<=25){
    console.log("you are healthy. Congratulations!!");
    document.getElementById("result").innerHTML ="you are healthy. Congratulations!!";

}
else if(25<result && result<=30){
    console.log("you are overweight.");
    document.getElementById("result").innerHTML ="you are overweight.";
}
else{
    console.log("you are obese.")
    document.getElementById("result").innerHTML ="you are obese.";
}
}
}
