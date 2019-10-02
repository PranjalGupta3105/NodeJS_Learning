const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


// var command  = process.argv[2];

// console.log(process.argv);

yargs.command({
    command : 'add',
    describe: 'Adds a Note',
    builder: {
        notetitle:{
            describe: 'title the note that is to be added',
            demandOption: true,
            type: 'string'

        },
        notebody:{
            describe:'Body of the Note that will be added',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv)
    {
        console.log("Adds a Note with the Title as "+"\n"+argv.notetitle+"\n"+"And the Body"+"\n"+argv.notebody)
    }
})


yargs.command({
    command : 'remove',
    describe: 'Removes a Note',
    handler: function()
    {
        console.log("Removes a Note")
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all of the existing Notes',
    handler: function()
    {
        console.log('List of all of the Existing Notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a Note',
    builder: {
        notetitle:{
            describe: 'This is the title of the Note that is to be Read',
            demandOption: true, // Default : false, Is usable if we want to make the passing argument as True
            type:'string' // When we want to apply the strictness that the argument value passed must strictly
                          // be of the following Type
        }
    },
    handler: function(argv)
    {
        console.log('Reads the Note having the title as '+argv.notetitle)
    }
})

yargs.argv // Is nessesary for the Arguments Passed in the command Line to be Parsed

// console.log("\n"+"Printed Process.ARGV as YARGS.ARGV"+"\n"+yargs.argv);


// if(command === 'add')
// {
//     console.log('Adding New Note');    
// } else if (command === 'remove')
// {
//     console.log('Removing the Provided Note');   
// }


// console.log(chalk.green('Success !'));

// console.log(chalk.red.bold('Error !'));

// console.log(chalk.underline.bgYellow('Wait !'));

// console.log(chalk.red.inverse.bold('lets test nodemon'));


// Returns True if the Enail is valid
// console.log(validator.isEmail('test@gmail.com'));

// Returns True if th Url is valid
// console.log(validator.isURL('https://www.google.com/'));


// const utils = require('./utils');

// utils.WriteToFileSync();

// utils.AppendNewTextSync('\n'+'The Author of the file is Pranjal Gupta');




