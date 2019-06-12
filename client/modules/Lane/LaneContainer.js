import { connect } from 'react-redux';
import Lane from './Lane';
import { createLaneRequest, editLane, updateLaneRequest, deleteLaneRequest } from "./LaneActions";
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  editLane,
  deleteLane: deleteLaneRequest,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
  createLane: createLaneRequest,
};

export default connect( mapStateToProps, mapDispatchToProps )(Lane);
