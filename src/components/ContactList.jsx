import React from "react";

const ContactList = ({ contacts, onEditContact, onDeleteContact }) => {
    return (
        <div className="h-[90%] w-full flex flex-col gap-4 overflow-y-auto">
            {contacts.map((contact) => (
                <div key={contact.id} className="w-full bg-white p-2">
                    <h3 className="text-xl text-[#2A52BE] font-extrabold capitalize "><span className=" text-lg text-[#04060C] mr-1"><i class="ri-user-fill"></i></span>{contact.name}</h3>
                    <p className="text-sm text-[#04060C] "><span className="mr-2"><i  class="ri-phone-line"></i></span>{contact.phone}</p>
                    <p className="text-sm text-[#04060C] "><span className="mr-2"><i class="ri-mail-line"></i></span>{contact.email}</p>
                    <button onClick={() => onEditContact(contact)} className="text-xs bg-[#2A52BE] text-white px-4 py-1 mr-2 mt-2">Edit</button>
                    <button onClick={() => onDeleteContact(contact.id)} className="text-lg  text-red-600  mr-4 mt-2"><i class="ri-delete-bin-6-fill"></i></button>
                </div>
            ))}
        </div>
    );
};

export default ContactList;