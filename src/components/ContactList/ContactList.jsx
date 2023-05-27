import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DeleteButton } from './ContactList.styled';
import { removeContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
const filterContacts = (contacts, filterValue) => {
  return contacts.filter(el => el.name.toLowerCase().includes(filterValue));
};
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  console.log('contacts', contacts, 'filterValue', filterValue);
  const contactsList = filterValue
    ? filterContacts(contacts, filterValue)
    : contacts;
  return (
    <ul>
      {contactsList.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <DeleteButton
            type="button"
            data-id={id}
            onClick={evt => {
              dispatch(removeContact(evt.currentTarget.dataset.id));
            }}
          >
            Delete
          </DeleteButton>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contList: PropTypes.array,
};
