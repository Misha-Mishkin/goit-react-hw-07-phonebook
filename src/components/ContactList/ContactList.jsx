import { useDeleteContactMutation } from '../../redux/operations';
import s from './ContactList.module.css';

export default function ContactList({ contacts }) {
  const [handleDelete] = useDeleteContactMutation();

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {phone}
            <button onClick={handleDelete} className={s.button}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
