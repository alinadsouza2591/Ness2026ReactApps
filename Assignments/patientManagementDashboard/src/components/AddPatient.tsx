import React, { useState } from 'react';
import type { Patient } from '../types/Patient';

interface Props {
  onAdd: (patient: Patient) => void;
}

const AddPatient: React.FC<Props> = ({ onAdd }) => {
  const [form, setForm] = useState({ id: '', name: '', diagnosis: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const idNum = parseInt(form.id);

    // Validations
    if (idNum < 0) return setError("ID cannot be negative");
    if (!form.name.trim()) return setError("Name is required");
    
    onAdd({ patientId: idNum, patientName: form.name, diagnosis: form.diagnosis });
    setForm({ id: '', name: '', diagnosis: '' }); // Reset
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input type="number" placeholder="ID" value={form.id} onChange={e => setForm({...form, id: e.target.value})} />
      <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      <input type="text" placeholder="Diagnosis" value={form.diagnosis} onChange={e => setForm({...form, diagnosis: e.target.value})} />
      <button type="submit">Add Patient</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddPatient;