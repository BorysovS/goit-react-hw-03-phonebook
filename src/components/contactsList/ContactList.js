import { ContactListItem } from './ContactListItem';
import { ContactsList, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <ContactListItem
              onDelete={onDelete}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </ListItem>
        );
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
