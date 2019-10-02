const fs = require('fs');

function WriteToFileSync()
{
    fs.writeFileSync('notes.txt','This File is created by Node JS');
}

function AppendNewTextSync(someContent)
{
    fs.appendFileSync('notes.txt', someContent );
}

module.exports = { WriteToFileSync, AppendNewTextSync }