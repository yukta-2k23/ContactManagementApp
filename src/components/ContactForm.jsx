import React, { useState, useEffect } from "react";

const ContactForm = ({ onAddContact, onEditContact, editingContact }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [NextId, setNextId] = useState(1);

    useEffect(() => {
        if (editingContact) {
            setName(editingContact.name);
            setPhone(editingContact.phone);
            setEmail(editingContact.email);
            setNextId(editingContact.id); 
        }
    }, [editingContact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: editingContact ? editingContact.id : NextId,
            name,
            phone,
            email,
        };
        if (editingContact) {
            onEditContact(newContact); 
        } else {
            onAddContact(newContact);
            setNextId(NextId + 1);
        }
        setName("");
        setPhone("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 ">
            <input
                className="w-full bg-[#EBF0FF]  px-2 py-2 border-b-[1px] border-[#04060C]"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required

            />
            <input
                className="w-full bg-[#EBF0FF]  px-2 py-2 border-b-[1px] border-[#04060C]"
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <input
                className="w-full bg-[#EBF0FF]  px-2 py-2 border-b-[1px] border-[#04060C]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button className="w-full px-2 py-2 border-b-[1px] bg-[#04060C] text-[#EBF0FF] font-semibold hover:bg-[#090f1c] transition-colors tracking-wide" type="submit">{editingContact ? "Update Contact" : "Add Contact"}</button>
        </form>
    );
};

export default ContactForm;
