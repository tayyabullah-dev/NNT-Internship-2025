const addNote = document.querySelector("#btn-addnote");
const mainContainer = document.querySelector(".main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".notes textarea");
    const data = [];

    notes.forEach( (nte) => {
         data.push(nte.value);
    });

    if(data.length === 0){
        localStorage.removeItem("notes");
    }else{
localStorage.setItem("notes" ,JSON.stringify(data));
    }
}
addNote.addEventListener("click" , () => {
addNotes();
});

//add blanks note
const addNotes = (txt = "") => {
const note = document.createElement('div');
note.classList.add("notes");
note.innerHTML = `
    <div class="toolbar">
    <button id="btn-save"><i class="fa-solid fa-floppy-disk"></i></button>
    <button id="btn-delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    <textarea name="" id="txtarea"> ${txt} </textarea>
     `;

note.querySelector("#btn-delete").addEventListener("click" , () => {
    note.remove();
    saveNotes();
 });

 note.querySelector("#btn-save").addEventListener("click" , () => {
        saveNotes();
 });

 note.querySelector("textarea").addEventListener("focusout" , () => {
saveNotes();
 });
mainContainer.appendChild(note);
saveNotes();

}

(
    function() {
        let saveData = JSON.parse(localStorage.getItem("notes"));
        if(saveData === null){
            addNotes();
        }else{
            saveData.forEach( (sd) => {
                addNotes(sd);
            });
    
        }
    }
)();

