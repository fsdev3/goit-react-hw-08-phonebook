import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <b>Error: {error}</b>}
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
};

export default Contacts;
