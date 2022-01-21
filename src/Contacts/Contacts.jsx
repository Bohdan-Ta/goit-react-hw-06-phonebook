import PropTypes from "prop-types";

import s from "./Contacts.module.css";

import { connect } from "react-redux";
import actions from "../redux/phonebook-ections";

function Contacts({ contacts, onDeleteContact }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.list}>
            <div>
              <p className={s.name}>{name}</p>
              <p className={s.number}>{number}</p>
            </div>
            <button
              onClick={() => onDeleteContact(id)}
              className={s.slidingButton}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <p className={s.totalContact}>
        all contacts in phonebook: {contacts.length}
      </p>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getSensitiveSearch = (items, filter) => {
  const lowerCaseLetters = filter.toLowerCase().trim();
  return items.filter((contact) =>
    contact.name.toLowerCase().includes(lowerCaseLetters)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getSensitiveSearch(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
