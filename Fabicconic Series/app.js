var a = +prompt("Enter the limit for Fibonacci series","25");
var newNumber ;
var first = 0;
var second = 1;
for ( i = 0 ; i < a ; i++){ 
    if(i<=1){
        newNumber = i;
    }
    else{
        newNumber = first+second;
        first = second;
        second = newNumber;
    }
    document.write(newNumber+"<br>")
}
