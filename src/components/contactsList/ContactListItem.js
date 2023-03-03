import { AiOutlinePhone } from 'react-icons/ai';
import { Item, ItemBtn } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <Item>
      <AiOutlinePhone />
      <span>{name}:</span>
      <span>{number}</span>
      <ItemBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </ItemBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
