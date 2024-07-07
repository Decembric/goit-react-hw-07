import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectFilters } from "../../redux/contactsSlice";
// import { setFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterNames = useSelector(selectFilters);
  const filterContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filterNames.toLowerCase())
  );
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