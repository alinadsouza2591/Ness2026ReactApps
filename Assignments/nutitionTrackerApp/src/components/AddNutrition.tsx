import { useState } from 'react';
import type { Nutrition } from '../services/api';
import { TextField, Button, Paper, Stack, Typography } from '@mui/material';

interface Props {
  onAdd: (entry: Nutrition) => void;
}

const AddNutrition = ({ onAdd }: Props) => {
  const [form, setForm] = useState<Omit<Nutrition, 'id'>>({ foodName: '', calories: 0, protein: 0 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.foodName.trim()) return;
    onAdd(form);
    setForm({ foodName: '', calories: 0, protein: 0 });
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add Nutrition Entry
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Food Name"
            value={form.foodName}
            required
            fullWidth
            onChange={e => setForm({ ...form, foodName: e.target.value })}
          />
          <TextField
            label="Calories"
            type="number"
            value={form.calories}
            required
            fullWidth
            onChange={e => setForm({ ...form, calories: Number(e.target.value) })}
          />
          <TextField
            label="Protein (g)"
            type="number"
            value={form.protein}
            required
            fullWidth
            onChange={e => setForm({ ...form, protein: Number(e.target.value) })}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Entry
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default AddNutrition;
