import {useEffect, useState} from "react"
import {Route, Switch} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props){
    const [cheese, setCheese] = useState(null)
    
    const URL = "https://cheese-api-backend-pmoney.herokuapp.com/cheese/"

    const getCheese = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setCheese(data)
    }

    const createCheese = async (onecheese) => {
        await fetch(URL, {
            method: "post", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(onecheese)
        })

        getCheese()
    }

    const updateCheese = async (onecheese, id) => {
        // make the put request to update a one cheese
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(onecheese)
        })
        // update list of one cheese
        getCheese()
    }

    const deleteCheese = async (id) => {
      //make delete request 
      await fetch(URL + id, {
        method: "delete",
      })
      //update list of people
      getCheese()
    }

    useEffect(() => {
        getCheese()
    }, [])
  
  
    return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index cheese={cheese} createCheese={createCheese} />
        </Route>
        <Route
          path="/cheese/:id"
          render={rp => (
            <Show
              people={cheese}
              updateCheese={updateCheese}
              deleteCheese={deleteCheese}
              //because the router props are an object and 
              //Im going to spread the object so I can show all of its props
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  )
}

export default Main