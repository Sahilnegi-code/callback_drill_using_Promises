const fs = require("fs");
const path = require("path");

const files = 4;

const createDirectoryAndJsonFiles = () => {
  const directoryPath = path.join(__dirname, "folder");

  fs.mkdir(directoryPath, { recursive: true }, (err) => {
    if (err) {
      console.error("Error creating directory:", err);
    } else {
      console.log("Directory is created");

      for (let index = 0; index < 4; index++) {
        const filePath = path.join(directoryPath, `File${index}.json`);
        const jsonData = { key: `value${index}` };

        fs.writeFile(filePath, JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(`Error creating file ${filePath}:`, err);
          } else {
            console.log(`File ${filePath} is created`);
          }
        });
      }
    }
  });
};


const deleteThoseFileSimultaneously = () => {
  const directoryPath = path.join(__dirname, "folder");

  for (let index = 0; index < 4; index++) {
    const filePath = path.join(directoryPath, `File${index}.json`);
    const jsonData = { key: `value${index}` };
    try {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file ${filePath}:`, err);
          console.log(`File ${filePath} is not deleted.`);
        } else {
          console.log(`File ${filePath} has been deleted.`);
        }
      });
    } catch (err) {
      console.log("error => ", err);
    }
  }
};



module.exports= {createDirectoryAndJsonFiles , deleteThoseFileSimultaneously};