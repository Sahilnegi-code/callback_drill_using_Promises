const helperFunctions = require("../fs-problem1");

const fs = require("fs");
const path = require("path");

const absolutePathOfRandomDirectory = path.join(__dirname , '../folder');
const randomNumberOfFiles = 4;
const testFunction1 = ( absolutePathOfRandomDirectory , randomNumberOfFiles ) => {
  helperFunctions.createDirectoryAndJsonFiles( absolutePathOfRandomDirectory ,randomNumberOfFiles  , (  absolutePathOfRandomDirectory , randomNumberOfFiles) => {
  helperFunctions.deleteThoseFileSimultaneously(  absolutePathOfRandomDirectory , randomNumberOfFiles );
 });
};

testFunction1(absolutePathOfRandomDirectory , randomNumberOfFiles);
