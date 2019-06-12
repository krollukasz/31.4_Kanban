import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from '../Note/NoteContainer';

import styles from './Lane.css';

const Lane = (props) => {
  const { connectDropTarget, lane, laneNotes, editLane, addNote, updateLane, deleteLane } = props;
  const laneId = lane.id;

  return connectDropTarget(
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <Edit
          className={styles.LaneName}
          editing={lane.editing}
          value={lane.name}
          onValueClick={() => editLane(laneId)}
          onUpdate={name => updateLane({ ...lane, name, editing: false })}
        />
        <div className={styles.LaneDelete}>
          <span onClick={() => deleteLane(laneId)}>x</span>
        </div>
      </div>
      <div className={styles.LaneAddNote}>
        <button onClick={() => addNote({ task: 'New note' }, laneId)}>Add new note</button>
      </div>
      <NotesContainer 
        className={styles.NoteContent}
        notes={laneNotes}
        laneId={laneId}
      />
    </div>
  );
};


Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  editLane: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
};

export default Lane;
