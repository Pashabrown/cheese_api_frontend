import { useState } from "react"
function Show(props) {
  const id = props.match.params.id
  const cheese = props.cheese
  const onecheese = cheese.find(p => p._id === id)

  const [editForm, setEditForm] = useState(onecheese)

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.updateCheese(editForm)
    props.history.push("/")
  }

  const removeOnecheese = () => {
    props.deleteCheese(onecheese._id)
    props.history.push("/")
  }

    return (
      
    <div className="onecheese">
      <h1>{onecheese.name}</h1>
      <h2>{onecheese.origin}</h2>
      <img src={onecheese.image} alt={onecheese.name} />
      <h2>{onecheese.grade}</h2>
      <button id="delete" onClick={removeOnecheese}>Delete</button>

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={editForm.name}
                name="name"
                placeholder="enter name"
                onChange={handleChange}
                
            />
            <input 
                type="text"
                value={editForm.origin}
                name="origin"
                placeholder="enter origin"
                onChange={handleChange}
                
            />

            <input
                type="text"
                value={editForm.image}
                name="image"
                placeholder="image"
                onChange={handleChange}
                />

            <input
                type={Number}
                value={editForm.grade}
                name="grade"
                placeholder="grade"
                onChange={handleChange}
            />
            <input type="submit" value="Update Onecheese"/>
            
        </form>
    </div>
  )
}

export default Show








   