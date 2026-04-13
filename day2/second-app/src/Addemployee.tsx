import React, { useState } from "react";
import type { Employee } from "./Employee";
 
interface Props {
  onAdd: (emp: Employee) => void;
}
 
const Addemployee: React.FC<Props> = ({ onAdd }) => {
  const [form, setForm] = useState<Employee>({
    id: 0,
    name: "",
    designation: "",
    department: "",
  });
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = () => {
    onAdd({ ...form, id: Date.now() });
  };
 
  return (
<div>
<input name="id" onChange={handleChange} />
<input name="name" onChange={handleChange} />
<input name="designation" onChange={handleChange} />
<input name="department" onChange={handleChange} />
<button onClick={handleSubmit}>Add</button>
</div>
  );
};
 
export default Addemployee;