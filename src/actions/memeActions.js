import { postMeme } from '../services/meme';

export const CREATE_MEME = 'CREATE_MEME';
export const createMeme = meme => dispatch => {
  postMeme(meme)
    .then(createdMeme => dispatch({
      type: CREATE_MEME,
      payload: createdMeme
    }));
};
