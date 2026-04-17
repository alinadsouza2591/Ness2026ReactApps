import type { Nutrition } from '../services/api';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  item: Nutrition;
  onDelete: (id: number) => void;
}

const NutritionItem = ({ item, onDelete }: Props) => (
  <Card variant="outlined" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1 }}>
    <CardContent sx={{ flex: 1 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {item.foodName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.calories} kcal • {item.protein}g protein
      </Typography>
    </CardContent>
    <Box sx={{ pr: 1 }}>
      <IconButton aria-label="delete" color="error" onClick={() => item.id && onDelete(item.id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  </Card>
);

export default NutritionItem;
