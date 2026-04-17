import type { Nutrition } from '../services/api';
import NutritionItem from './NutritionItem';
import { Paper, Typography, Stack } from '@mui/material';

interface Props {
  items: Nutrition[];
  onDelete: (id: number) => void;
}

const NutritionList = ({ items, onDelete }: Props) => (
  <Paper sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Nutrition Records
    </Typography>
    {items.length > 0 ? (
      <Stack spacing={2}>
        {items.map(item => (
          <NutritionItem key={item.id ?? item.foodName} item={item} onDelete={onDelete} />
        ))}
      </Stack>
    ) : (
      <Typography variant="body2" color="text.secondary">
        No nutrition entries yet. Add one above.
      </Typography>
    )}
  </Paper>
);

export default NutritionList;
