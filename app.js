// gets elements from html
let encrypt = document.getElementById('form-encryption--encrypt');
let decrypt = document.getElementById('form-encryption--decrypt');
let opDiv = document.getElementById('encryption-output');
// adds an event listener for the button
encrypt.addEventListener('click', () => displayEncrypt());
// function to display the encryption
function displayEncrypt() {
    // gets the value of the input
    let input = document.getElementById('form-encryption--input').value;
    // output string
    let out = '';
    // for loop that runs through each character
    for (i = 0, n = input.length; i < n; i++) {
        // converts char to binary
        let val = input.charCodeAt(i).toString(2);
        // calls runEncrypt
        const encryptBin = runEncrypt(val);
        // calls binToChar
        const encryptOut = binToChar(encryptBin);
        // adds the string to the out variable
        out += encryptOut;
    }
    // gives the div text
    opDiv.textContent = `Your encrypted message is ${out}`;
    // div styling
    opDiv.style.fontSize = '18px';
    opDiv.style.marginTop = '10px';
    opDiv.style.fontWeight = '700';
    opDiv.style.fontFamily = 'Courier New'
}

// encrypts the binary
function runEncrypt(char) {
    // splits the binary into an array of chars
    let charN = char.split('');
    // for loop to run through each number
    for (j = 0, k = char.length; j < k; j++) {
        // conditional changes 1 to 0 and 0 to 1
        if (charN[j] === '1') {
            charN.splice(j, 1, '0');
        } else {
            charN.splice(j, 1, '1');
        }
    }
    // condiitonal that makes sure values have a corresponding ASCII by making sure the leading two digits aren't 0
    if (charN[0] === '0' && charN[1] === '0') {
        charN.splice(1, 1, '1');
    } else {}
    // rejoins the array into a string
    charN = charN.join('');
    return charN;
}

// function that converts back to a char from binary
function binToChar(eb) {
    let encryptDec = parseInt(eb, 2);
    let encryptStr = String.fromCharCode(encryptDec);
    return encryptStr;
}