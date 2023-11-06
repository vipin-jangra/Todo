import {React} from "react";
import header from "../assets/header.webp";
import { useState } from "react";

const Todo = () =>{
    const [checked, setChecked] = useState([]);
    const checkList = ["Apple", "Banana", "Tea", "Coffee", "Banana", "Tea", "Coffee"];
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };


      
      // Return classes based on whether item is checked
      var isChecked = (item) =>
       checked.includes(item) ? "checked-item" : "not-checked-item";
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure className="header">
                        <img className="logo" src={header} alt="header"></img>
                        <h1 className="title">TO DO</h1>
                    </figure>
                    <div className="tasks">
                        <div className="checkList">
                            <div className="title-check">
                                Task List:
                                <div className="totalCheck">
                                    {checked.length} / {checkList.length} done
                                </div>
                            </div>
                            <div className="list-container">
                                {checkList.map((item, index) => (
                                    <div key={index} className="items">
                                    <input value={index} type="checkbox" onChange={handleCheck} className="checkBoxItem"/>
                                    <input type="hidden" value={item} name={item} />
                                    <span className={isChecked(String(index))} >{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        + Add Task
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;