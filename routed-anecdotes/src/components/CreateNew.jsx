import PropTypes from 'prop-types'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useNotificationDispatch } from "../NotificationContext"

export const CreateNew = ({ addNew }) => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')

  const notificationDispatch = useNotificationDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let anecdote = { content, author, info, votes: 0 }

    addNew(anecdote)
    notificationDispatch({ type: 'CREATE_ANECDOTE', payload: anecdote })
    navigate('/')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div>
            author
            <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            url for more info
            <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
          </div>
          <button>create</button>
      </form>
    </div>
  )
}

CreateNew.propTypes = {
    addNew: PropTypes.func
}