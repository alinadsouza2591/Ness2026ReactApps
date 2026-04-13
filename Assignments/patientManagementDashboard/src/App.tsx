import React from 'react';
import { usePatients } from './hooks/usePatients';
import { usePatientCount } from './hooks/usePatientCount';
import AddPatient from './components/AddPatient';
import PatientGrid from './components/PatientGrid';

const App: React.FC = () => {
  const { patients, addPatient } = usePatients();
  const count = usePatientCount(patients);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Healthcare Dashboard</h1>
      <p><strong>Total Patients:</strong> {count}</p>
      <hr />
      <AddPatient onAdd={addPatient} />
      <PatientGrid patients={patients} />
    </div>
  );
};

export default App;