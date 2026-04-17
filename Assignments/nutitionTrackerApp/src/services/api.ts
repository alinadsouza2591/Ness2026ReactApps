import axios from 'axios';

export interface Nutrition {
  id?: number;
  foodName: string;
  calories: number;
  protein: number;
}

const API_URL = 'http://localhost:3001/nutrition';

export const getNutrition = () => axios.get<Nutrition[]>(API_URL);
export const addNutrition = (data: Nutrition) => axios.post<Nutrition>(API_URL, data);
export const deleteNutrition = (id: number) => axios.delete(`${API_URL}/${id}`);