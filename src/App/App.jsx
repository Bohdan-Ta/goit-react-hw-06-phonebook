import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

import Sections from "../Section";
import Forms from "../Forms/Forms";
import Contacts from "../Contacts";
import Filter from "../Filter/Filter";

import "react-toastify/dist/ReactToastify.css";
import s from "./App.module.css";

export default function App() {
  // const getDataSubmit = ({ name, number }) => {
  //   const searchDublicate = contacts.find((contact) => contact.name === name);

  //   searchDublicate
  //     ? toast.warning(`${name} is already in contacts`)
  //     : setContacts((contacts) => [
  //         { id: nanoid(), name, number },
  //         ...contacts,
  //       ]);
  // };

  return (
    <div className={s.container}>
      <Sections title="Phonebook">
        <Forms />
      </Sections>
      <Sections title="Contacts">
        <Filter />
        <Contacts />
      </Sections>
      <ToastContainer />
    </div>
  );
}
