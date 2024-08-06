import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Anecdote = ({ anecdote }) => {
    return ( 
        <div>
            <h1>{anecdote.content} by {anecdote.author}</h1>
            <div>
                <p>has {anecdote.votes}</p>
            </div>
            <div>for more see <Link to={anecdote.info}>{anecdote.info}</Link></div>
            <br />
        </div>
)}

Anecdote.propTypes = {
    anecdote : PropTypes.object
}