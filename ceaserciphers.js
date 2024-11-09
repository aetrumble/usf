        
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        
        function encrypt (message, shiftValue)
        {
            let encryptedMessage = '';

            for (let i = 0; i < message.length; i++) {

                const char = message[i].toLowerCase();
            
                if (alphabet.includes(char)) {
                    const index = alphabet.indexOf(char);
                    const newIndex = (index + shiftValue) % alphabet.length;
                    encryptedMessage += alphabet[newIndex];

                if ( (i + 1) % 2 !== 0) {
                    const randomLetters = Math.floor(Math.random() * 26);
                    encryptedMessage += alphabet[randomLetters];
                }

                }
                else {
                    encryptedMessage += char;
                }
                
            } 
            return encryptedMessage;
        }
        
        console.log(encrypt('Hello Brutus, meet me at the high gardens.', 42));
        
        function decrypt (encryptedMessage, shiftValue) {
            
            let decryptedMessage = '';

            for (let i = 0; i < encryptedMessage.length; i++) {

                const char = encryptedMessage[i].toLowerCase();
                
                if ( (i + 1) % 3 !== 0) {
                    const char = encryptedMessage[i].toLowerCase();
                    const index = alphabet.indexOf(char);
                    
                    if (alphabet.includes(char)) {
                        let newIndex = index - shiftValue;
                        while (newIndex <= 0) newIndex += alphabet.length;
                        decryptedMessage += alphabet[newIndex % alphabet.length];
                    }
                    else {
                        decryptedMessage += char;
                    } 
                }
            }
                        
            return decryptedMessage;
        }

        console.log(decrypt('Xuobbce eRhakjikiw, gcueujr cfu wqjy jzxul xfywox pwqghtiudri.', 42));
        console.log(decrypt('Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv "zQkhhuubyjkit" yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.', 42));

        console.log("test");
