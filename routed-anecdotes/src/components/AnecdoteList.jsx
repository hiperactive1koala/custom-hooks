/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Anecdote = ({ anecdote }) => {
  return (
    <li>
      <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
    </li>
  )
}

export const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} />
      )}
    </ul>
  </div>
);

AnecdoteList.propTypes = {
  anecdotes : PropTypes.array
}