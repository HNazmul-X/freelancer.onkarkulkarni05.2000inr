 export const randomString = (count) => {
    const letter = "abcdefghijklmnopqrstuvwxyz__ABCDEFGHIJKLMNOPQRSTUVXYZ__";
    let randomString = "";
    for (let i = 0; i < count; i++) {
        const randomStringNumber = Math.floor(1 + Math.random() * (letter.length - 1));
        randomString += letter.substring(randomStringNumber, randomStringNumber + 1);
    }
    console.log(randomString)
    return randomString;

};

