import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import React, { Component, PropTypes } from 'react';
import styles from './Edit.css';

export default class Edit extends Component {
  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }
  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onUpdate) {
      this.props.onUpdate(value.trim());
    }
  }

  renderDelete = () => {
    return <span className={styles.Delete} onClick={this.props.onDelete}>x</span>;
  }

  renderValue = () => {
    const { value, onDelete, onValueClick } = this.props;

    return (
    <div className={styles.NoteWrapper}>
      <span className={styles.NoteTitle} onClick={onValueClick}>{value}</span>
      <div className={styles.DeleteNote}>
        {onDelete ? this.renderDelete() : null}
      </div>
    </div>
    );
  }

  renderEdit = () => {
    return (
      <input
        type="text"
        autoFocus
        defaultValue={this.props.value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  }   

  render() {
    return (
      <div className={this.props.className}>
        {this.props.editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }
}

Edit.propTypes = {
  value: PropTypes.string,
  onUpdate: PropTypes.func,
  onValueClick: PropTypes.func,
  onDelete: PropTypes.func,
  editing: PropTypes.bool,
  className: PropTypes.string,
};