import { useState } from 'react';
import type { Patient } from '../types/Patient';

export const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const addPatient = (newPatient: Patient) => {
    setPatients((prev) => [...prev, newPatient]);
  };

  return { patients, addPatient };
};