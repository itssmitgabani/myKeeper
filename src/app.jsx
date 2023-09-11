import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea'
import { useState } from 'react';

function App() {
    const [notes,setNotes] = useState([])
    function addNote(newNote){
        setNotes((prevNotes)=>{
            return [...prevNotes,newNote]
        })
    }
    function DeleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((note,index)=>{
                return index !== id
            })
        })
    }
    return (
        <div>
            <Header></Header>
            <CreateArea onAdd={addNote}></CreateArea>
            {notes.map((note,index)=>{
                return(<Note key={index} id={index} title={note.title} content={note.content} onDelete={DeleteNote}></Note>)
            })}
            <Footer></Footer>
        </div>
    )
}
export default App;