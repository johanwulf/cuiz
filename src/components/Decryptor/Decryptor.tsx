import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export const Decryptor = () => {
  const [key, setKey] = useState("");
  const [encryptString, setEncrypt] = useState("");

  const encryptWithAES = (text: string) => {
    return CryptoJS.AES.encrypt(text, key).toString();
  };

  const decryptWithAES = (ciphertext: string) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

  return (
    <div className="w-96">
      <h1 className="text-4xl font-bold mt-2">Decryptor</h1>
      <div className="mt-2 w-full">
        <h1>Key</h1>
        <input
          type="text"
          className="input w-full"
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-2 w-full">
        <div>
          <h1>Clear text</h1>
          <input
            type="text"
            className="input w-full"
            value={decryptWithAES(encryptString)}
            onChange={(e) => {
              setEncrypt(encryptWithAES(e.target.value));
            }}
          />
        </div>
        <div>
          <h1>Encryption</h1>
          <input
            type="text"
            className="input w-full"
            value={encryptString}
            onChange={(e) => setEncrypt(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
