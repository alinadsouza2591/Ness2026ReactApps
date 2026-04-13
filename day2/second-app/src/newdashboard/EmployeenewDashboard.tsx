import { useMemo, useState } from "react";

import Viewgrid from "./Viewgrid";
import { useEmployees } from "../useEmployee";

import type { Employee } from "../Employee";

import AddnewEmployee from "./AddnewEmployee";

export default function EmployeenewDashboard() {
  const { employees, addEmployee } = useEmployees();
 
  // assuming hook returns a function OR value → adjust accordingly
   // 2. Type useState
  const [searchText, setSearchText] = useState<string>("");
  // 3. Type useMemo result
  const filteredEmployees = useMemo<Employee[]>(() => {
    console.log("invoking memo");
    if (!searchText) return employees;
 
    return employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(searchText.toLowerCase()) ||
        emp.department.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [employees, searchText]);
 
  return (
    <div>
      <h1>Employee Dashboard</h1>
 
      {searchText}
      <input
        type="text"
        name="searchText"
        value={searchText}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(evt.target.value)
        }
      />
 
      <section className="clsdashboard">
        <AddnewEmployee addEmpDataEvent={addEmployee} />
        <Viewgrid employeelist={filteredEmployees} />
            </section>
    </div>
  );
}