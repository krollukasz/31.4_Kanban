import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';

// Import Style
import styles from './Kanban.css';

const Kanban = (props) => (
  <div className={styles.Kanban}>
    <button
      className={styles.AddLane}
      onClick={() => props.createLane({
        name: 'New lane',
      })}
    >Add lane</button>
    <Lanes className="KanbanLanes" lanes={props.lanes} />
  </div>
);

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  createLane: createLaneRequest,
  fetchLanes,
};

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
