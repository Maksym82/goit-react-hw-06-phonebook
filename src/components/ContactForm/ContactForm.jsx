import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contactsSlice';



export function ContactForm() {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        const { name, number } = form.elements;
    
        if (contacts.toLowerCase().some(contact => contact.name === name.value.toLowerCase())) {
          Notiflix.Report.warning(
            'Warning',
            `${name.value} is already in contacts.`
          );
        } else {
          dispatch(addContact(name.value, number.value));
        }
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel>
                Name
                <FormInput
                    type='text'
                    name='name'
                    pattern="^[a-zA-Zа-яА-Я\s]+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </FormLabel>
            <FormLabel>
                Number
                <FormInput
                    type="tel"
                    name="number"
                    pattern="\+?[0-9\s\-\(\)]+"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </FormLabel>
            <FormButton type='submit'>Add Contact</FormButton>              
        </Form>
    );
}

    

    
    
   
  
