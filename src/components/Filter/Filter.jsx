import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Field, Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterName = evt => {
    const filterValue = evt.target.value.trim().toLowerCase();
    dispatch(setFilter(filterValue));
  };
  return (
    <Field>
      Find contacts by name
      <Input type="text" onChange={handleFilterName} />
    </Field>
  );
};
