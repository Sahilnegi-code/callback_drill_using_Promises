const helperFunctions = require('../problem1')
const fs = require('fs').promises;

const testFunction1 = async () => {

    try {
        await helperFunctions.createDirectoryAndJsonFiles();

      await  helperFunctions.deleteThoseFileSimultaneously();
    }
    catch (error) {
        console.log(error)
    }
}

testFunction1();
