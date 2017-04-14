'use strict';

const hash = (() => {
	class Hash {
		hashSha3(msg) {
			let hash = CryptoJS.SHA3(msg);
			console.log(hash.toString());
		}

		hashMd5(msg) {
			let hash = CryptoJS.MD5(msg);
			console.log(hash.toString(CryptoJS.enc.Base64));
		}

		hashMd5(msg) {
			let hash = CryptoJS.MD5(msg);
			console.log(hash.toString(CryptoJS.enc.Base64));
		}
    // generateSalt: function () {
    //     return crypto.randomBytes(128).toString("base64")
    // },
    // generateHashedPassword: function (salt, pwd) {
    //     let hmac = crypto.createHmac("sha1", salt)
    //     return hmac.update(pwd).digest("hex")
    // },
    // encrypt: function(text, key) {
    //     let cipher = crypto.createCipher("aes256", key);
    //     let encryptedData = cipher.update(text, "binary", "hex");
    //     return (encryptedData + cipher.final("hex"));
    // },
    // decrypt: function(cipher, key) {
    //     let decipher = crypto.createDecipher("aes256", key);
    //     let decryptedData = decipher.update(cipher, "hex", "binary");
    //     return (decryptedData + decipher.final("binary"));
    // }
	}

	const newHash = new Hash();
	return newHash;
})();

export {
	hash
}