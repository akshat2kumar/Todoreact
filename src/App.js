import React from "react";
import "./index.css";
import useList from './useList';

function App() {
  const{toDo,setToDo,toDos,setToDos,editId,deleteItem,handleEdit,handleSubmit}=useList();

  return (
    <div className="App">
      <div className="textBox">
        <input  value={toDo} onChange={(e) => setToDo(e.target.value)}  type="text" placeholder="Text here" />
        <button className="submit" onClick={handleSubmit}>{editId !== null ? "Save" : "Add"}</button>
      </div>
      <div className="listitem">
        <h3>List</h3>
        {toDos.map((obj) => (
          <div className="list" key={obj.id}>
            <input
              onChange={(e) => {setToDos((prevToDos) =>prevToDos.map((prevObj) =>
                    prevObj.id === obj.id ? { ...prevObj, status: e.target.checked } : prevObj
                  )
                );
              }}
              checked={obj.status}
              type="checkbox"
            />
            <p>{editId === obj.id ? <input value={toDo} onChange={(e) => setToDo(e.target.value)} /> : obj.text}</p>
            <button className="edit" onClick={() => handleEdit(obj.id)}>{editId === obj.id ? "Cancel" : "Edit"}</button>
            <button className="delete" onClick={() => deleteItem(obj.id)}>delete</button>
          </div>
        ))}
      </div>
      <div className="completedtask">
        <h3>Completed task</h3>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <div className="completed" key={obj.id}>
                <p>{obj.text}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
