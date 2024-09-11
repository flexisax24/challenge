const fs = require('fs');
const moment = require('moment');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Append the current date and time to the data
  const currentDate = moment().format('DD-MM-YYYY HH:mm:ss');
  const updatedData = `${data}\n${currentDate}`;

  // Write the updated data to the output file
  fs.writeFile('output.txt', updatedData, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('File written successfully!');
    }
  });
});