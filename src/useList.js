import { useState } from "react";

const useList=()=>{
    const [toDos, setToDos] = useState([]);
    const [toDo, setToDo] = useState("");
    const [editId, setEditId] = useState(null); // New state for edit mode
  
    const deleteItem = (idToDelete) => {
      const newItems = toDos.filter((item) => item.id !== idToDelete);
      setToDos(newItems);
    };
  
    const handleEdit = (id) => {
      setEditId(id);
      const taskToEdit = toDos.find((obj) => obj.id === id);
      if (taskToEdit) {
        setToDo(taskToEdit.text);
      }
    };
  
    const handleSubmit = () => {
      if (editId !== null) {
        setToDos((prevToDos) =>
          prevToDos.map((prevObj) =>
            prevObj.id === editId ? { ...prevObj, text: toDo } : prevObj
          )
        );
        setToDo("");
        setEditId(null);
      } else {
        setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
        setToDo("");
      }
    };
    return{toDo,setToDo,toDos,setToDos,editId,deleteItem,handleEdit,handleSubmit}

}
export default useList;