import { connect } from 'react-redux';
import MemeForm from '../components/meme/MemeForm';
import { createMeme } from '../actions/memeActions';

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, top, bottom, imageUrl) {
    event.preventDefault();
    dispatch(createMeme({ top, bottom, imageUrl }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MemeForm);
