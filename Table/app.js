var a = prompt("Write the number for which you want to generate table","2");
document.getElementById("table").innerHTML = ('" '+a+' "');
for (i = 1 ; i <= 20 ; i++ ){
    document.getElementById("r-"+i).innerHTML =  a +" X "+ i + " = " + i*a  
}