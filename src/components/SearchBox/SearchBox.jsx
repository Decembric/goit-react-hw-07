import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilterContacts} from "../../redux/contactsSlice";


const SearchBox = () => {
  const dispatch = useDispatch();
  const nameContact = useSelector(selectFilterContacts);
  const handleFiltersContacts = event => dispatch(changeFilter(event.target.value));


  return (
    <>
      <label className={css.userName}>Find contacts by name</label>
      <input className={css.inputName}
        type="text"
        value={nameContact}
        onChange={handleFiltersContacts}
      />
    </>
  );
};

export default SearchBox;