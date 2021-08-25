const reverseString = (str) => {
    //Implementación
    if(typeof(str) !== "string" || str.length <= 1 || str.length > 15) 
        throw new Error("Tipo de dato o longitud no admitidos");
    
    newText = str.split("");
    reverse = newText.reverse();
    return reverse.join("");
    
}

module.exports = {
    reverseString
}