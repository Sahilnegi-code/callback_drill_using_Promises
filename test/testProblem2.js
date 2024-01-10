const problem2 = require('../problem2')
const fs = require('fs');

const executeFunctions = async () => {

    try {
        const fileContent = await problem2.readFile();
        await problem2.storeInNewFile('SahilNegi');
        await problem2.splitIntoSentences();

        await problem2.sortTheContent();
       await problem2.deleteThoseFileSimultaneously();

    }
    catch (error) {
        console.log(error)
    }
}

executeFunctions();
