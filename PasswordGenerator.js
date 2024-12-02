const symbols = [
    'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 
    'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 
    'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 
    'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z',
    '!', '#', '-', '_', '@', '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9' ]

function generatePassword(length){
    let password = '';
    for (let i = 0; i < length; i++)
        password += symbols[Math.round(Math.random() * symbols.length - 1)];
    return(password)
}
console.log(generatePassword(23))