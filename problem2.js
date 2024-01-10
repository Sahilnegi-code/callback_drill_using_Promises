const fs = require("fs");
const path = require("path");
const readFile = () => {
  const filePath = "./lipsum_1.txt";
  let val = fs.readFile(filePath, "utf8", (err, fileContent) => {
    if (err) {
      console.log(err);
    } else {
      console.log(" file is read  - ", fileContent);
    }
  });
};

// readFile();

const storeInNewFile = async (content) => {
  content = content.toUpperCase();
  const filePath = "example.txt";

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`Content has been written to ${filePath}`);
    }
  });

  fs.writeFile("filenames.txt", filePath, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`Content has been written to ${filePath}`);
    }
  });
};

// storeInNewFile("Hello my name is Sahil ");

const splitIntoSentences = () => {
  const filePath = "./lipsum_1.txt";
  let val = fs.readFile(filePath, "utf8", (err, fileContent) => {
    if (err) {
      console.log(err);
    } else {
      const lowerCase = fileContent.toLowerCase();
      console.log(lowerCase);
      // const sentences = lowerCase.split(/[\.\?!]\s/);
      const output = "output.txt";

      fs.writeFile(output, lowerCase, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        }
      });

      // Store the name of the new file in filenames.txt
      fs.writeFile("filenames.txt", output, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        }
      });
    }
  });
};

// splitIntoSentences();

const sortTheContent = () => {
  const filePath = "./output.txt";
  let val = fs.readFile(filePath, "utf8", (err, fileContent) => {
    const sortContent = fileContent
      .split("")
      .sort((a, b) => {
        if (a < b) return -1;
        return 1;
      })
      .join("");

    const newFile = "newFile.txt";

    fs.writeFile(newFile, sortContent, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
    });

    fs.writeFile('./lipsum_1.txt', newFile, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
    });
  });
};
// sortTheContent();

const deleteThoseFileSimultaneously =  async() => {
  const filePath = "./filenames.txt";

  try {
    const filenamesFile = filePath;
    const filenamesContent = await fs.readFile(filenamesFile, 'utf-8');

    // Split the content into an array of filenames
    const filenames = filenamesContent.split('\n').filter(Boolean);

    // Delete each file asynchronously
    await Promise.all(
      filenames.map(async (filename) => {
        try {
          await fs.unlink(filename);
          console.log(`File ${filename} deleted successfully.`);
        } catch (err) {
          console.error(`Error deleting file ${filename}: ${err.message}`);
        }
      })
    );


    await fs.unlink(filenamesFile);
    console.log('filenames.txt deleted successfully.');
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
 
};


module.exports = {readFile , storeInNewFile , splitIntoSentences , sortTheContent ,deleteThoseFileSimultaneously};