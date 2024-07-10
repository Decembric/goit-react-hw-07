import { selectFilterContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";
import { useSelector } from "react-redux";



const ContactList = () => {
const filterContacts = useSelector(selectFilterContacts)
console.log(filterContacts)
 return (
    <ul className={css.personList}>
      {Array.isArray(filterContacts) && 
      filterContacts.map((contact) => {
        return (
          <li className={css.personItem} key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;