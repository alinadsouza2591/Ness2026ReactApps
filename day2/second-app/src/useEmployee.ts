import { useState } from "react";
import type { Employee } from "./Employee";
import { cartlist } from "./utility";
 
export const useEmployees = () => {
    const emplist:Array<Employee>  = cartlist;
  const [employees, setEmployees] = useState<Employee[]>(emplist);
 
  const addEmployee = (emp: Employee) => {
    setEmployees((prev) => [...prev, emp]);
  };
 
  return { employees, addEmployee };
};