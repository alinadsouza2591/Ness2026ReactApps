import { useEffect, useMemo, useState } from 'react';
import type { Nutrition } from './services/api';
import { getNutrition, addNutrition, deleteNutrition } from './services/api';
import NutritionList from './components/NutritionList';
import AddNutrition from './components/AddNutrition';
import { Box, Typography, Alert, CircularProgress, Paper } from '@mui/material';

const App = () => {
  const [nutritionList, setNutritionList] = useState<Nutrition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await getNutrition();
      setNutritionList(response.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Unable to load nutrition data. Please ensure the JSON server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (entry: Nutrition) => {
    try {
      const response = await addNutrition(entry);
      setNutritionList(prev => [...prev, response.data]);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Unable to add entry. Please try again.');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteNutrition(id);
      setNutritionList(prev => prev.filter(item => item.id !== id));
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Unable to delete entry. Please try again.');
    }
  };

  const totalCalories = useMemo(() => {
    return nutritionList.reduce((sum, item) => sum + item.calories, 0);
  }, [nutritionList]);

  return (
    <Box sx={{ maxWidth: 700, margin: 'auto', padding: 3 }}>
      <Paper sx={{ padding: 3, mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Nutrition Tracker
        </Typography>
        <Typography variant="body1" gutterBottom>
          View nutrition records, add new entries, and delete items with backend persistence.
        </Typography>
      </Paper>

      <AddNutrition onAdd={handleAdd} />

      <Paper sx={{ padding: 2, mb: 3 }}>
        <Typography variant="h6">Total Calories</Typography>
        <Typography variant="h5">{totalCalories} kcal</Typography>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <NutritionList items={nutritionList} onDelete={handleDelete} />
      )}
    </Box>
  );
};

export default App;
