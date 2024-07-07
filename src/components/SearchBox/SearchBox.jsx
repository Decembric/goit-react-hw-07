import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css"
import { setFilter, changeFilter } from "../../redux/filtersSlice";


const SearchBox = () => {
  const dispatch = useDispatch();
  const nameContact = useSelector(setFilter);
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