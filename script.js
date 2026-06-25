function encryptText() {

    const message =
        document.getElementById("pesan").value;

    const key =
        parseInt(document.getElementById("kunci").value);

    if (message.trim() === "") {
        alert("Input pesan terlebih dahulu!");
        return;
    }

    let text = message.toUpperCase();
    let caesarResult = "";

    for (let i = 0; i < text.length; i++) {

        let code = text.charCodeAt(i);

        if (code >= 65 && code <= 90) {

            caesarResult += String.fromCharCode(
                ((code - 65 + key) % 26) + 65
            );

        } else {

            caesarResult += text[i];
        }
    }

    let finalCipher = caesarResult;

    finalCipher = finalCipher.replace(/TH/g, "ZX");
    finalCipher = finalCipher.replace(/HE/g, "QW");
    finalCipher = finalCipher.replace(/AN/g, "RT");
    finalCipher = finalCipher.replace(/ER/g, "YU");

    document.getElementById("cipher").value =
        finalCipher;

    document.getElementById("proses").innerHTML =
        `
        <b>Step 1 - Caesar Cipher</b><br>
        ${caesarResult}
        <br><br>
        <b>Step 2 - Polygram Cipher</b><br>
        ${finalCipher}
        `;
}

function decryptText() {

    let encryptedText =
        document.getElementById("cipherMasuk").value;

    const key =
        parseInt(document.getElementById("kunci").value);

    encryptedText =
        encryptedText.replace(/ZX/g, "TH");

    encryptedText =
        encryptedText.replace(/QW/g, "HE");

    encryptedText =
        encryptedText.replace(/RT/g, "AN");

    encryptedText =
        encryptedText.replace(/YU/g, "ER");

    let originalText = "";

    for (let i = 0; i < encryptedText.length; i++) {

        let code =
            encryptedText.charCodeAt(i);

        if (code >= 65 && code <= 90) {

            originalText += String.fromCharCode(
                ((code - 65 - key + 26) % 26) + 65
            );

        } else {

            originalText += encryptedText[i];
        }
    }

    document.getElementById("plain").value =
        originalText;
}

function copyCipher() {

    const result =
        document.getElementById("cipher").value;

    navigator.clipboard.writeText(result);

    alert("Encrypted text copied successfully!");
}

function kirimWA() {

    const phone =
        document.getElementById("nomor").value;

    const encryptedMessage =
        document.getElementById("cipher").value;

    if (phone.trim() === "") {

        alert("Nomor tujuan belum diisi!");
        return;
    }

    if (encryptedMessage.trim() === "") {

        alert("Belum ada ciphertext yang akan dikirim!");
        return;
    }

    const whatsappURL =
        "https://web.whatsapp.com/send?phone=" +
        phone +
        "&text=" +
        encodeURIComponent(encryptedMessage);

    window.open(whatsappURL, "_blank");
}