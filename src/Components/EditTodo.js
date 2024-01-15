import React , {useState}from 'react'
import PropTypes from 'prop-types'

const EditTodo = ({ todo, onEdit }) => {
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)

    const handleSubmit = (e) => {
        e.preventDefault()
        onEdit({ ...todo, title, description })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Todo</h2>
            <label>
                Title:
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button type='submit'>Save</button>
        </form>
    )
}

EditTodo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

EditTodo.defaultProps = {
    title: "Todo",
}

export default EditTodo