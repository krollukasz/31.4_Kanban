import { connect } from "react-redux";
import Notes from "./Note";
import {editNote, updateNoteRequest, deleteNoteRequest} from "./NoteActions";

const mapDispatchToProps = {
  editNote,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
};

// brak mapStateToProps, ustawiam null jako pierwszy argument, inaczej zwróci błąd
export default connect( null, mapDispatchToProps )(Notes);
