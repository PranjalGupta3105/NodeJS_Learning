const fs = require('fs')

function UpdateFileContent(updatedname, updatedage)
{
    fs.readFile('1-json.json',function(err, fileData)
    {
        if(err)
        console.log('File Read Error'+err);
        

        var parsedJSONData = JSON.parse(fileData)

        updatedJSONData = parsedJSONData

        updatedJSONData.Name = updatedname
        updatedJSONData.Age = updatedage

        var updatedStringifiedJSONData = JSON.stringify(updatedJSONData)

        fs.writeFile('1-json.json',updatedStringifiedJSONData, function(err)
        {
            if(err)
            console.log('File Write Error'+err);
        })
    })
}

UpdateFileContent('Pranjal', '24.4')