import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (payload) => ({
  payload: {
    id: nanoid(),
    ...payload,
  },
}));

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

const actions = { addContact, deleteContact, changeFilter };

export default actions;
