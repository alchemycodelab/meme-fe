import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Memes from '../components/meme/Memes';
import { getMemes } from '../selectors/memeSelectors';
import { fetchMemes } from '../actions/memeActions';

export default function MemeList() {
  const memes = useSelector(getMemes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemes());
  }, []);

  return (
    <Memes memes={memes} />
  );
}
