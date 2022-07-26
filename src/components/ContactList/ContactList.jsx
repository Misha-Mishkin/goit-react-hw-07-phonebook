import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from '../../serviceAPI/contactsAPI';
import { useSelector } from 'react-redux';
import { getFilter } from '../../serviceAPI/selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const [handleDelete, { isLoading: isDeleting }] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  const { data: contacts = [], isLoading } = useFetchContactsQuery();
  const renderContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {renderContactList.map(({ id, name, phone }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {phone}
            <button onClick={handleDelete} className={s.button}>
              {isDeleting ? 'Delete' : 'Deleting...'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
