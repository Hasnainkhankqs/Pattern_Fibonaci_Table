
var a = +prompt("write your number")
function diamond(a){ 
      
document.write("<pre>");
    var space = a-1;
for (i= 1; i <= a; i++){
    for( j = 1 ; j<= space; j++)
    document.write(" ");
    space--;
    var sym = (2*i)-1;
   for (k = 1; k <= sym; k++)
      document.write("*");
      document.write("<br />");
}
for(m=1; m < a ; m++){
    for(p = 1 ; p <= m ; p++)
    document.write(" ");
    var aster = 2*(a-m)-1;
    for( q = 1;q <= aster  ;q++ )
    document.write("*");
    document.write("<br />");
}
}
diamond(a)
