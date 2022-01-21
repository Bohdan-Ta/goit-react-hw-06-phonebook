import { DebounceInput } from "react-debounce-input";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../redux/phonebook-ections";

import s from "./Filter.module.css";

function Filter({ value, onChange }) {
  return (
    <div className={s.form}>
      <label className={s.label}>
        Find contact by name:
        <DebounceInput
          type="text"
          autoComplete="off"
          minLength={2}
          debounceTimeout={300}
          placeholder="search ........"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({ value: state.contacts.filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
