const fs = require('fs');
const path = require('path');
const outputFile = path.join(path.parse(process.argv[2]).dir, 
    path.basename(process.argv[2], '.csv')) + '.json';
const readline = require("readline");

var counter = 0
var arr = [];

const rl = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
    crlfDelay: Infinity
  });

rl.on('line', (line) => {
    arr.push(line.split(','));
    ++counter;
}).on('close', ()=> {
    output = "[\n";
    for (i = 1; i < counter; ++i)
    {
        output += "  {\n    \"" + arr[0][0] + "\": \"" + arr[i][0] + "\",\n" +
                  "    \"" + arr[0][1] + "\": \"" + arr[i][1] + "\",\n" +
                  "    \"" + arr[0][2] + "\": \"" + arr[i][2] + "\",\n" +
                  "    \"" + arr[0][3] + "\": \"" + arr[i][3] + "\",\n" +
                  "    \"" + arr[0][4] + "\": \"" + arr[i][4] + "\",\n" +
                  "    \"" + arr[0][5] + "\": \"" + arr[i][5] + "\",\n" +
                  "    \"" + arr[0][6] + "\": \"" + arr[i][6] + "\",\n" +
                  "    \"" + arr[0][7] + "\": \"" + arr[i][7] + "\",\n" +
                  "    \"" + arr[0][8] + "\": \"" + arr[i][8] + "\",\n" +
                  "    \"" + arr[0][9] + "\": \"" + arr[i][9] + "\"\n" +
                  "  }";              
        if (i < counter - 1)
            output += ",\n";
        else
            output += "\n]";
    }
    fs.writeFileSync(outputFile, output, 'utf-8')
})
