const { rejects } = require("assert");
const { promises } = require("dns");
const fs = require("fs").promises;
const path = require("path");

const readFile = (absolutePathOfRandomDirectory, cb, cb1, cb2, cb3) => {

  const filePath = path.join(absolutePathOfRandomDirectory, "../lipsum_1.txt");

  let val = fs.readFile(filePath, "utf8").then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })



  

 

};

const storeInNewFile = (content, cb1, cb2, cb3) => {

  
  filePath = path.join(__dirname, "./lipsum_1.txt");

  content = content.toUpperCase();

  fs.writeFile(filePath, content)
  .then((data)=>{
  console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })
  

  filePath = path.join(__dirname, "filenames.txt");

  fs.writeFile(filePath, "lipsum_1.txt")
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  });

  splitIntoSentences();

};

const splitIntoSentences = () => {
  filePath = path.join(__dirname, "lipsum_1.txt");

  let val = fs.readFile(filePath, "utf8") 
    .then(( fileContent )=>{

      const lowerCase = fileContent.toLowerCase();
      const output = path.join(__dirname, "output.txt");

      fs.writeFile(output, lowerCase ).then (data =>  console.log(lowerCase, "is written on  ", output))
      .catch(err => console.log(err));

      fs.writeFile(
        path.join(__dirname, "filenames.txt"),
        "output.txt"
      ).then(data => console.log(data)).catch((err)=>{
        console.log('Error - ', err );
      });

    })
sortTheContent();

};


const sortTheContent = () => {
  const filePath = path.join(__dirname, "output.txt");

  let val = fs.readFile(filePath, "utf8") 
  .then(( fileContent)=>{
    const sortContent = fileContent
    .split("")
    .sort((a, b) => {
      if (a < b) return -1;
      return 1;
    })

    .join("");


  const newFile = path.join(__dirname, "output.txt");

  fs.writeFile(newFile, sortContent).catch((err)=> console.log(err));

  fs.writeFile(path.join(__dirname, "filenames.txt"), "output.txt").catch((err)=>console.log(err));

  })
  .catch((err)=>{
    console.log(err);
  })
 
  
  deleteThoseFileSimultaneously();
};

const deleteThoseFileSimultaneously = () => {
  const filePath = "./filenames.txt";

  const fs = require("fs");

  const deleteFile = (filename) => {
 
    fs.unlink( path.join(__dirname , filename)) 
    .catch((err)=>{
      console.log(err);
    });

  };

  const deleteFiles = (fileListPath) => {
    fs.readFile(fileListPath, "utf8").then((data) => {

      const filenames = data.split("\n").map((filename) => filename.trim());

      // Delete each file simultaneously
      filenames.forEach((filename) => {

        deleteFile(filename);


    }).catch((error) => {
      console.log(error);
    }) 

 




    });






  };

  
  // Provide the path to filenames.txt
  const fileListPath = path.join(__dirname, "filenames.txt");



  // Call the deleteFiles function to initiate the process
  deleteFiles(fileListPath);







};

module.exports = {
  readFile,
  storeInNewFile,
  splitIntoSentences,
  sortTheContent,
  deleteThoseFileSimultaneously,
};
