import PropTypes from 'prop-types'

import { useNavigate } from "react-router-dom";
import { useNotificationDispatch } from "../NotificationContext"
import { useField } from '../hooks';

export const CreateNew = ({ addNew }) => {
  const { reset: resetContent, ...content } = useField("text");
  const { reset: resetAuthor, ...author } = useField("text");
  const { reset: resetInfo, ...info } = useField("text");

  const notificationDispatch = useNotificationDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let anecdote = { 
      content: content.value, 
      author: author.value, 
      info: info.value, 
      votes: 0 
    }

    addNew(anecdote)
    notificationDispatch({ type: 'CREATE_ANECDOTE', payload: anecdote })
    navigate('/')
  }

  const handleReset = () => {
    resetContent()
    resetAuthor()
    resetInfo()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' {...content} />
          </div>
          <div>
            author
            <input name='author' {...author} />
          </div>
          <div>
            url for more info
            <input name='info' {...info} />
          </div>
          <button type='submit'>create</button>
          <button type='button' onClick={handleReset}>reset</button>
      </form>
    </div>
  )
}

CreateNew.propTypes = {
    addNew: PropTypes.func
}