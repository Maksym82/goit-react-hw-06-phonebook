import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Section } from '../Section/Section';
import { Container } from './App.styled';

  

 export function App() {
  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
 }

  
 

 

 