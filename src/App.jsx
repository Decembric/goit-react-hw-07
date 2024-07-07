
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";



const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.contacts.loading)
  const isError = useSelector(state => state.contacts.error)
  // const setContacts = useSelector(state => state.contacts.items)
  useEffect(() => {
    // if(setContacts.length < 0) return
  dispatch(fetchContacts())
}, [dispatch])
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ContactList />
    </div>
  );
}

export default App