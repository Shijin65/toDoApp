import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  var currentdate = new Date();

  var datetime =
    " @" +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  const handleadd = (e) => {
    
    if (toDo.length !== 0) {
      setToDos([
        ...toDos,
        {
          id: Date.now(),text: toDo,state: true,del: true,time: 0,cm: false,
        },
      ]);
    }
    setToDo("")
  };

  return (
    <div id="main">
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="mainclass">
        {/* < ------------ CREATE TODOS ---------- > */}

        <div className="card">
          <h2>CREATE A TODO</h2>

          <div className="input">
            <input
              id={"my_input"}
              type={"text"}
              value={toDo}
              autoComplete=""
              onChange={(e) => {
                setToDo(e.target.value);
              }}
              placeholder="🖊️ Add item..."
            />

            <i onClick={handleadd} className="fas fa-plus" />
          </div>

          {/* < ------------ TODOS LIST ---------- > */}

          <h4 style={{ marginTop: "10px" }}>TODO LIST</h4>
          <div className="todos-container">
            {toDos.map(
              (obj) =>
                obj.state && (
                  <div className="todos">
                    <div className="todo">
                      <div className="left">
                        <p>{obj.text}</p>
                      </div>

                      <div className="right">
                        {/* < ------------***** TODOS LIST *****---------- > */}

                        {/* < ------ COMPLETED BUTTON ------- > */}
                        <div
                          className="inputs"
                          style={{ backgroundColor: "lightgreen" }}
                        >
                          <label htmlFor="checkbox">COMPLETED</label>
                          <input
                            onChange={(e) => {
                              setToDos(
                                toDos.filter((objafter) => {
                                  if (objafter.id === obj.id) {
                                    objafter.cm = e.target.checked;
                                    objafter.state = !e.target.checked;
                                    objafter.time = datetime;
                                  }
                                  return objafter;
                                })
                              );
                            }}
                            value={obj.tick}
                            type="checkbox"
                            name="checkbox"
                          />
                        </div>
                        {/* < ------**** COMPLETED BUTTON END  ****------- > */}

                        {/* < ---------------***** CREATE TODOS ENDS ****------------- > */}

                        {/* < ------------ DELETE BUTTON ---------- > */}
                        <div
                          className="inputs"
                          style={{ backgroundColor: "red" }}
                        >
                          <label htmlFor="">DELETE</label>

                          <input
                            onChange={(e) => {
                              setToDos(
                                toDos.filter((delobj) => {
                                  if (delobj.id === obj.id) {
                                    delobj.del = !e.target.checked;
                                    delobj.time = datetime;
                                    delobj.state = false;
                                  }
                                  return delobj;
                                })
                              );
                            }}
                            type="checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        {/* < ------------**** CREATE TODOS ENDS **** ---------- > */}

        {/* < ----- COMPLETED TODOS ---- > */}

        <div
          className="card"
          style={{ overflowY: "scroll", overflowX: "hidden" }}
        >
          <div className="active">
            <h2>COMPLETED TODOS ✅</h2>
            {toDos.map(
              (obj) =>
                obj.cm && (
                  <div
                    className="deleted"
                    style={{ backgroundColor: "lightgreen" }}
                  >
                    <p>
                      {obj.text} 
                    </p>
                    <p>task completed : {obj.time}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
        {/* < -----***** COMPLETED TODOS ENDS ******---- > */}

        {/* < ---------- DELETED TODOS ---------- > */}

        <div
          className="card"
          style={{ overflowY: "scroll", overflowX: "hidden" }}
        >
          <h2 style={{ backgroundColor: "grey", padding: "0%" }}>
            DELETED TODOS ❌
          </h2>

          {toDos.map((obj) =>
            obj.del ? (
              ""
            ) : (
              <div className="deleted">
                <div>
                  <p style={{ color: "white" }}>{obj.text}</p>
                  <p>Deleted Time{obj.time}</p>
                </div>
                <div>
                  <span>
                    <p style={{ color: "blue" }}>Restore</p>
                  </span>
                  <input
                    onChange={(e) => {
                      setToDos(
                        toDos.filter((delobj) => {
                          if (delobj.id === obj.id) {
                            delobj.del = e.target.checked;
                            delobj.state = true;
                          }
                          return delobj;
                        })
                      );
                    }}
                    type="radio"
                    class="fa-sharp fa-solid fa-rotate-right fa-spin"
                  />
                </div>
              </div>
            )
          )}
        </div>
        {/* < ----------***** DELETED TODOS ENDS *****---------- > */}
      </div>
    </div>
    </div>
  );
}

export default App;
