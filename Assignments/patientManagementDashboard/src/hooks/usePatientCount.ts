import { useMemo } from 'react';
import type { Patient } from '../types/Patient';

export const usePatientCount = (patients: Patient[]) => {
  return useMemo(() => patients.length, [patients]);
};