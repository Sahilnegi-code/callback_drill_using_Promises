const problem2 = require("../fs-problem2");
const fs = require("fs");
const path = require("path");
const absolutePathOfRandomDirectory = path.join(__dirname, "../folder");
const randomNumberOfFiles = 4;

const executeFunctions = () => {
  const fileContent = problem2.readFile(
    absolutePathOfRandomDirectory, 
    problem2.storeInNewFile , problem2.splitIntoSentences ,
    problem2.sortTheContent ,     problem2.deleteThoseFileSimultaneously
  );

   

   




};

executeFunctions();
