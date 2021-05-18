import {useState} from "react"
import {Link} from "react-router-dom"

function Index(props){
//adding a state to our form
    const [newForm, setNewForm] = useState({
    name: "",
    origin: "",
    image: "",
    grade: "",
  });

  // handleChange function for form
  //i want to change the property that has the name of the input 
  //and I want the target to match the value
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
      //it just makes sure the page doesnt refresh itself
      //im gonna pass create people the state in our new form
      //after form updates I want it to go back to a blank form
      //so thats why we set new form
    event.preventDefault();
    props.createCheese(newForm);
    setNewForm({
      name: "",
      origin: "",
      image: "",
      grade: "",
    });
  };

    // loaded function
  const loaded = () => {

    
    return props.cheese.map((onecheese) => (
      <div key={onecheese._id} className="onecheese">
        <Link to={`/cheese/${onecheese._id}`}><h1>{onecheese.name}</h1></Link>
        <img src={onecheese.image} alt={onecheese.name} />
        <h3>{onecheese.origin}</h3>
        <h3>{onecheese.grade}</h3>
      </div>
    ));
  };
  
  const loading = () => {
        return <h1>Loading...</h1>
    }

      
  return <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          //tell the user knows what to type in there
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.origin}
          name="origin"
          //tell the user knows what to type in there
          placeholder="origin"
          onChange={handleChange}
        />
        <input
          type="text"
          //the value is connected to the image 
          value={newForm.image}
          //the name is the image
          name="image"
          //so the user knows what to put in that box
          placeholder="image URL"

          onChange={handleChange}
        />
        <input
          type={Number}
          value={newForm.grade}
          name="grade"
          placeholder="grade"
          onChange={handleChange}
        />
        <input type="submit" value="Create One Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
} 
export default Index