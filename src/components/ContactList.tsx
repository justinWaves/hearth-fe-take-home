
import React from 'react';
import contacts from '../data/contacts.json';  // Importing JSON data
  // Import client-side component
import { IContact } from '@/types';           // Import type definitions

const ContactList: React.FC = () => {
    return (
        <ul>
            {contacts.map((contact: IContact) => (
                <ListItem key={contact.id} firstName={contact.firstName} lastName={contact.lastName} />
            ))}
        </ul>
    );
};

export default ContactList;
