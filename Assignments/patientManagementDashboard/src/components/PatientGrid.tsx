import React, { useState, useMemo } from 'react';
import type { Patient } from '../types/Patient';

interface Props {
  patients: Patient[];
}

const PatientGrid: React.FC<Props> = ({ patients }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = useMemo(() => {
    return patients.filter(p => 
      p.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [patients, searchTerm]);

  if (patients.length === 0) return <h3>Still loading...</h3>;

  return (
    <div>
      <h3>Patient Records</h3>
      <input 
        type="text" 
        placeholder="Search name or diagnosis..." 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <table border={1} style={{ width: '100%', marginTop: '10px' }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Diagnosis</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(p => (
            <tr key={p.patientId}>
              <td>{p.patientId}</td>
              <td>{p.patientName}</td>
              <td>{p.diagnosis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientGrid;