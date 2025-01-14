import React, { useState, useEffect } from "react"; 
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Pagination from "./components/Pagination";
import Hero from "./components/Hero";



const App = () => {

    const [contacts, setContacts] = useState(() => {
        const storedContacts = localStorage.getItem("contacts");
        return storedContacts ? JSON.parse(storedContacts) : [];
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [editingContact, setEditingContact] = useState(null);
    const contactsPerPage = 2;

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    const handleAddContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const handleEditContact = (updatedContact) => {
        setContacts(contacts.map((contact) =>
            contact.id === updatedContact.id ? updatedContact : contact
        ));
        setEditingContact(null); 
    };

    const handleDeleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

    return (
      <div className="font-sans">
        <Hero />
        <div className="h-screen  bg-[#2A52BE] flex items-center justify-center">
          <div className="app h-3/4 w-3/4 shadow-xl shadow-[#00000060] bg-[#EBF0FF] p-10 flex items-center justify-between">
              
              <div className="h-full w-1/2 ">
                <h1 className='text-5xl font-sans font-extrabold text-[#2A52BE]'>New Contact</h1>
                <h5 className='text-sm font-medium font-sans  text-[#202841] mt-2'>Add new contacts or edit existing ones!</h5>
                <ContactForm 
                    onAddContact={handleAddContact} 
                    onEditContact={handleEditContact}
                    editingContact={editingContact} 
                />
              </div>
              <div className="h-full w-[45%] bg-[#04060C] p-4 ">
                <ContactList
                    contacts={currentContacts}
                    onEditContact={(contact) => setEditingContact(contact)}
                    onDeleteContact={handleDeleteContact}
                />
                <Pagination
                    contactsPerPage={contactsPerPage}
                    totalContacts={contacts.length}
                    paginate={paginate}
                />
              </div>
              
          </div>
        </div>
        
      </div>
      
    );
};

export default App;
