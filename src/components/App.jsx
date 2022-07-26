import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useFetchContactsQuery } from '../redux/operations';

export default function App() {
  const { data } = useFetchContactsQuery();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter title="Find contact by name" />
      {data && <ContactList contacts={data} />}
    </div>
  );
}
