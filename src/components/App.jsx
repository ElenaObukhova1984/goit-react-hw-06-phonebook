import { GlobalStyle } from "./GlobalStyle";
import ContactForm from "./ContactForm";
import ContactsList  from "./ContactList";
import Filter  from "./Filter";


export const App=()=> {
  return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList/>
        <GlobalStyle/>
      </div>
    )
}



