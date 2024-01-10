const fs = require("fs");
const path = require("path");



const createDirectoryAndJsonFiles = ( absolutePathOfRandomDirectory ,randomNumberOfFiles , cb) => {
  const directoryPath = absolutePathOfRandomDirectory;
  fs.mkdir(directoryPath, { recursive: true }, (err) => {
    if (err) {
      console.error("Error creating directory:", err);
    } else {
      console.log("Directory is created");

      for (let index = 0; index < randomNumberOfFiles; index++) {
        const filePath = path.join(directoryPath, `File${index}.json`);
        const jsonData = { key: `value${index}` };

        fs.writeFile(filePath, JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(`Error creating file ${filePath}:`, err);
          } else {
            console.log(`File ${filePath} is created`);
          }
        });

        cb( absolutePathOfRandomDirectory ,randomNumberOfFiles );
      }
    }
  });
};

const deleteThoseFileSimultaneously = ( absolutePathOfRandomDirectory ,randomNumberOfFiles) => {
  const directoryPath = absolutePathOfRandomDirectory;
  for (let index = 0; index < randomNumberOfFiles; index++) {
    const filePath = path.join(directoryPath, `File${index}.json`);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("Not Deleted");
      } else {
        console.log(`File ${filePath} has been deleted.`);
      }
    });
  }
};

module.exports = { createDirectoryAndJsonFiles, deleteThoseFileSimultaneously };
