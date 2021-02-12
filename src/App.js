
// eslint-disable-next-line no-unused-vars
import react from 'react';
import axios from 'axios';

function App() {

  const addUserHandler = () => {
    const userData = {
      email:'user3@gmail.com',
      password:'testing123'
    }

    axios({
      url:'http://localhost:5000//graphql',
      method:'POST',
      data:{
        query:`
        mutation {
          addUser(userinput:{
            email:"${userData.email}"
            password:"${userData.password}"
          }){
            _id
            email
            password
          }
        }
        `
      }
    }).then( response =>{
      console.log(response.data)
    }).catch( err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <button onClick={addUserHandler}>


      Voeg gebruiker toe
      </button>
    </div>
  );
}

export default App;
