import { connect } from "react-redux";
import Notes from "./Note";
import { deleteNoteRequest, editNote, updateNoteRequest, moveWithinLane } from '../Note/NoteActions';

const mapDispatchToProps = {
  editNote,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
  onValueClick: editNote,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
  moveWithinLane,
};

// brak mapStateToProps, ustawiam null jako pierwszy argument, inaczej zwróci błąd
export default connect( null, mapDispatchToProps )(Notes);
