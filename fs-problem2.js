const fs = require("fs");
const path = require("path");

// problem2.storeInNewFile = cb , problem2.splitIntoSentences = cb1 ,
// problem2.sortTheContent = cb2 , problem2.deleteThoseFileSimultaneously() = cb3

const readFile = (absolutePathOfRandomDirectory, cb, cb1, cb2, cb3) => {
  const filePath = path.join(absolutePathOfRandomDirectory, "../lipsum_1.txt");
  let val = fs.readFile(filePath, "utf8", (err, fileContent) => {
    if (err) {
      console.log("readfile Error", err);
    } else {
      console.log(" file is read  - ", fileContent);
    }
  });

  cb("Sahil Negi", cb1, cb2, cb3);
};

const storeInNewFile = (content, cb1, cb2, cb3) => {
  filePath = path.join(__dirname, "./lipsum_1.txt");
  content = content.toUpperCase();

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("storeInNewFile Error");
    } else {
      console.log(`Content has been written to ${filePath}`);
    }
  });

  filePath = path.join(__dirname, "filenames.txt");

  fs.writeFile(filePath, "lipsum_1.txt", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`Content has been written to ${filePath}`);
    }
  });

  cb1(cb2, cb3);
};

const splitIntoSentences = (cb2, cb3) => {
  filePath = path.join(__dirname, "lipsum_1.txt");

  let val = fs.readFile(filePath, "utf8", (err, fileContent) => {
    if (err) {
      console.log("SplitIntoSentence Error");
    } else {
      const lowerCase = fileContent.toLowerCase();
      console.log(lowerCase);
      const output = path.join(__dirname, "output.txt");

      fs.writeFile(output, lowerCase, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log(lowerCase, "is written on  ", output);
        }
      });

      // Store the name of the new file in filenames.txt

      fs.writeFile(
        path.join(__dirname, "filenames.txt"),
        "output.txt",
        (err) => {
          if (err) {
            console.error("Error writing to file:", err);
          }
        }
      );
    }
  });

  cb2(cb3);
};

// splitIntoSentences();

const sortTheContent = (cb3) => {
  const filePath = path.join(__dirname, "output.txt");

  let val = fs.readFile(filePath, "utf8", (err, fileContent) => {
    const sortContent = fileContent
      .split("")
      .sort((a, b) => {
        if (a < b) return -1;
        return 1;
      })

      .join("");

    console.log(sortContent);

    const newFile = path.join(__dirname, "output.txt");

    fs.writeFile(newFile, sortContent, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
    });

    fs.writeFile(path.join(__dirname, "filenames.txt"), "output.txt", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
    });
  });
  cb3();
};

const deleteThoseFileSimultaneously = () => {
  const filePath = "./filenames.txt";

  const fs = require("fs");

  const deleteFile = (filename, callback) => {
    console.log("FileName ====> ", filename);
    fs.unlink( path.join(__dirname , filename) , (err) => {
      if (err) {
        callback(`Error deleting ${filename}: ${err}`);
      } else {
        callback(null, `Deleted ${filename}`);
      }
    });
  };

  const deleteFiles = (fileListPath, callback) => {
    fs.readFile(fileListPath, "utf8", (readErr, data) => {
      if (readErr) {
        callback(`Error reading filenames.txt: ${readErr}`);
        return;
      }
      console.log("Data =>", data);
      const filenames = data.split("\n").map((filename) => filename.trim());
      console.log("Filenames ==> ", filenames);
      // Counter to keep track of completed deletions
      let deletedCount = 0;

      // Function to check if all files are deleted
      const checkCompletion = () => {
        deletedCount++;
        if (deletedCount === filenames.length) {
          callback(null, "All files deleted.");
        }
      };

      // Delete each file simultaneously
      filenames.forEach((filename) => {
        deleteFile(filename, (deleteErr, result) => {
          if (deleteErr) {
            console.error(deleteErr);
          } else {
            console.log(result);
          }
          checkCompletion();
        });
      });
    });
  };

  // Provide the path to filenames.txt
  const fileListPath = path.join(__dirname, "filenames.txt");

  // Call the deleteFiles function to initiate the process
  deleteFiles(fileListPath, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
};

module.exports = {
  readFile,
  storeInNewFile,
  splitIntoSentences,
  sortTheContent,
  deleteThoseFileSimultaneously,
};
