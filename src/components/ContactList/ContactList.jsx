import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from '../../serviceAPI/contactsAPI';
// import { useSelector } from 'react-redux';
// import { getFilter } from '../../serviceAPI/selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const [handleDelete, { isLoading: isDeleting }] = useDeleteContactMutation();
  // const filterValue = useSelector(getFilter);
  const { data: contacts = [], isLoading } = useFetchContactsQuery();

  // const renderContacts = contacts?.filter(({ name }) =>
  //   name.toLowerCase().startsWith(filterValue.toLowerCase())
  // );
  
  return (
    <ul>
      {isLoading && <p>Loading...</p>}

      {contacts.length > 0 &&
        contacts.map(({ id, name, phone }) => {
          return (
            <li key={id} className={s.item}>
              {name}: {phone}
              <button
                type="button"
                onClick={() => handleDelete(id)}
                className={s.button}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </li>
          );
        })}
    </ul>
  );
}
