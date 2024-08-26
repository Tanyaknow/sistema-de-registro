function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = btoa(inputText); // Basic encryption using Base64
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    try {
        let decryptedText = atob(inputText); // Basic decryption using Base64
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        document.getElementById('outputText').value = 'Error: Texto no válido para desencriptar.';
    }
}
