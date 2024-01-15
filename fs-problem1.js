const fs = require("fs").promises;
const path = require("path");

const createDirectoryAndJsonFiles = (
  absolutePathOfRandomDirectory,
  randomNumberOfFiles
) => {
  const directoryPath = absolutePathOfRandomDirectory;

  fs.mkdir(directoryPath, { recursive: true }).then(()=>{

    for (let index = 0; index < randomNumberOfFiles; index++) {
      const filePath = path.join(directoryPath, `File${index}.json`);
      const jsonData = { key: `value${index}` };

      fs.writeFile(filePath, JSON.stringify(jsonData), (err) => {
        new Promise((res, rej) => {
          if (err) {
            rej(err);
          } else {
            res(" Newly created ");
          }
        })
          .then(() => {
            deleteThoseFileSimultaneously(index);
          })
          .catch((err) => {
            console.log("Error =>", err);
          });
      });
    }
    
  })
  . catch((err)=>{
    console.log(err);
  }  )

};

const deleteThoseFileSimultaneously = (index) => {
  const directoryPath = path.join(__dirname, "./folder");

  const filePath = path.join(directoryPath, `File${index}.json`);

  fs.unlink(filePath)
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log("err  --> ", err);
  });
};

module.exports = { createDirectoryAndJsonFiles, deleteThoseFileSimultaneously };
