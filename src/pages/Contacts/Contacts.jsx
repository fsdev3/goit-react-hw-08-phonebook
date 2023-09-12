import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Container } from './Contacts.styled';

const Contacts = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <b>Error: {error}</b>}
      {isLoading && <Loader />}
      <ContactList />
    </Container>
  );
};

export default Contacts;
