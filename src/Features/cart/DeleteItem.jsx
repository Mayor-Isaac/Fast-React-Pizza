import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

export default function DeleteItem() {
    function handleDelete() {
      dispatch(deleteItem(pizzaId));
    }
  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}
