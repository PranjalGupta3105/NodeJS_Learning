const getNotes  = function(){
    return 'Your Notes'
}

const addNote = function(title, body)
{
    console.log(
        "Adds a Note with the Title as "+"\n"+argv.notetitle
        +"\n"+
        "And the Body"+"\n"+argv.notebody)
}

const loadNotes = function(){
    
}


module.exports = {
    getNotes : getNotes,
    addNote : addNote
}