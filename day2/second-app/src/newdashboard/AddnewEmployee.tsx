import React from 'react'
 
import { useState } from "react";
import type { Employee } from '../Employee';
 
 
 
 
// 2. Define Props type
interface Props {
  addEmpDataEvent: (emp: Employee) => void;
}
 
export default function AddnewEmployee({ addEmpDataEvent }: Props) {
  // 3. Typed state
  const [employee, setEmployee] = useState<Employee>({
    id: 0,
    name: "",
    designation: "",
    department:""
  });
 
  const [errmessage, setErrmessage] = useState<string>("");
 
  // 4. Typed event
  const handleData = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
 
    setEmployee({
      ...employee,
      [name]: name === "id" ? Number(value) : value,
    });
  };
 
  const addEmployeeEvt = () => {
    let errors = "";
 
    if (employee.id < 0) errors += "ID cannot be negative. ";
    if (employee.name.trim().length === 0)
      errors += "Name cannot be empty. ";
 
    console.log(errors);
 
    if (errors.length !== 0) {
      setErrmessage(errors);
    } else {
      setErrmessage("");
      // lifting state up
      addEmpDataEvent(employee);
    }
  };
 
  return (
    <div>
      <div className="clsdata">
        <h1>Add employee</h1>
 
        <input
          type="number"
          name="id"
          value={employee.id}
          onChange={handleData}
          placeholder="enter your id"
        />
 
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleData}
          placeholder="enter your name"
        />
 
        <input
          type="text"
          name="designation"
          value={employee.designation}
          onChange={handleData}
          placeholder="enter your desig"
        />
 
  <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleData}
          placeholder="enter your dpeartment"
        />
        <button onClick={addEmployeeEvt}>Add Employee</button>
      </div>
 
      {errmessage && <p>{errmessage}</p>}
    </div>
  );
}