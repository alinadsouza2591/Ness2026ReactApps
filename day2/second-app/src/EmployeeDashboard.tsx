import React from "react";
import type { Employee } from "./Employee";
 
interface Props {
  employees: Employee[];
}
 
const EmployeeDashboard: React.FC<Props> = ({ employees }) => {
  return (
<div>
<h2>Employee Dashboard</h2>
      {employees.map((emp) => (
<div key={emp.id}>
          {emp.name} - {emp.designation}
</div>
      ))}
</div>
  );
};
 
export default EmployeeDashboard;