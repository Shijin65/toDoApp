import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  return(
    <div className="app">
      
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          id={"my-input"}
          type={"text"}
          value={toDo}
          onChange={(e) => {
            setToDo(e.target.value);
          }}
          placeholder="🖊️ Add item..."
        />

        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, tick: false }])
          }
          className="fas fa-plus"
          ></i>
      </div>
      <div className="todos-container">
        <div className="todos">
          {toDos.map((obj) => (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setToDos(
                      toDos.map((objafter) => {
                        if (objafter.id === obj.id) {
                          objafter.tick = e.target.checked;
                        }
                        return objafter;
                      })
                    );
                  }}
                  value={obj.tick}
                  type="checkbox"
                  name=""
                  id=""
                  />
                <p>{obj.text}</p>
              </div>
              <div className="right">
              <i 
            class="fa-sharp fa-solid fa-trash"></i>
              </div>
            </div>
          ))}
        </div>
        <div className="active">
          <h1>
            <u>Active task</u>
          </h1>
          {toDos.map((obj) => {
            if (obj.tick) {
              return (
                <div>
                  <p>
                    task : [{obj.text}] TaskId : {obj.id}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
    );
}

export default App;
