
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Button } from './ContactItem.styled';

const ContactItem = ({contact}) => {
const dispatch = useDispatch();

  const onDelete=()=> {
    dispatch(deleteContact(contact.id));
  }

  return (
    <>
      <p>{contact.name}: {contact.number}</p>
        <Button type='button' onClick={onDelete}>
        Delete
      </Button>
    </>
  );
};



export default ContactItem;