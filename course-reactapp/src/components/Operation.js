
function sum(a, b){
    return a +b ;
}
function factorial(n){
 return n <= 0 ? 1 : n* factorial(n-1);
    
}
/**
 * 
 * @returns 
 */
function Operation(){
    return(
 <div>
    <p>Fatorial de 5: {factorial(5)}</p>
    <p>soma de 8+12: {sum(8,12)}</p>
 </div>
 );
}
export default Operation;