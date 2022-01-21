const letters = [
    'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 
    'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 
    'n', 'N', 'o', 'O', 'p', 'P',  'q', 'Q', 'r', 'R', 's', 'S', 't', 
    'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'
]

function randomNumber(min, max){
    return(Math.round(Math.random() * (max - min) + min));
}

function randomBool(){
    let randomValue = Math.round(Math.random());
    if (randomValue == 1) return(true);
    return(false);
}

function randomizeElement(){
    if (randomBool() == true) return(letters[randomNumber(0, letters.length)]);
    return(randomNumber(0, 9));
}

function generatePassword(length){
    let passwordElements = new Array(length);
    let password = '';
    for (let i = 0; i < passwordElements.length; i++){
        password += randomizeElement();
    }
    return(password)
}