import { connect } from 'react-redux';
import Lane from './Lane';
import { createLaneRequest, fetchLanes,  editLane, updateLaneRequest, deleteLaneRequest, moveBetweenLanes } from "./LaneActions";
import { createNoteRequest, createNote } from '../Note/NoteActions';
// import * as laneActions from './LaneActions';
// import { createNote } from '../Note/NoteActions';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const { id: noteId, laneId: sourceLaneId } = sourceProps;
 
    if (!targetProps.lane.notes.length) {
      targetProps.moveBetweenLanes(
        targetProps.lane.id,
        noteId,
        sourceLaneId,
      );
    }
  },
 };

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  editLane,
  deleteLane: deleteLaneRequest,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
  createLane: createLaneRequest,
  moveBetweenLanes,
  // ...laneActions,
  // addNote: createNote,
  // createLane: createLaneRequest,
  // editLane,
  // deleteLane,
  // updateLane,
  // addNote: createNoteRequest,
  // createLane: createLaneRequest,
  // moveBetweenLanes,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, noteTarget, (dragConnect) => ({
    connectDropTarget: dragConnect.dropTarget()
  }))
)(Lane);
