import React from "react";
import type { Employee } from "../Employee";
 
 
// 2. Define Props type
interface Props {
  employeelist: Employee[];
}
 
// 3. Functional Component with types
const Viewgrid: React.FC<Props> = ({ employeelist }) => {
  return (
    <section>
      {employeelist.length > 0 ? (
        <h1>Employee records</h1>
      ) : (
        <h1>Still loading</h1>
      )}
 
      <table border={2}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Addr</td>
          </tr>
        </thead>
 
        <tbody>
          {employeelist.map((emp) => {
            return (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
 
export default Viewgrid;