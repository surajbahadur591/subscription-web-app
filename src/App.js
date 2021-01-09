
import './App.css';
// importing netlify identity
import netlifyIdentity from 'netlify-identity-widget'



// initial setup of netlify identity
netlifyIdentity.init();

function App() {

  // const url = 'https://peaceful-kepler-3d0423.netlify.app';

  const handleLogin = () => {
    // for login/ signup pop up 
    netlifyIdentity.open();
    netlifyIdentity.on('login', (user) => console.log('welcome', user));
  }

  const user = netlifyIdentity.currentUser();
  console.log(user);
  let access_token = "";
  let roles = "";
  if(user){
    access_token = user.token.access_token;
    roles = user.app_metadata.roles;

  }

  fetch('./netlify/functions/manage-subscription', {
    method : 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`
    },
  }).then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))

  return (
    <div className="App">
      <header className="App-header">
        <h1> welcome, {user && user.user_metadata.full_name} </h1>
        
       <h1> Sign up for Premium Content</h1>
       <p>Get access to quality stuff!!</p>
       <button onClick={handleLogin}> Login </button>

       <p>{access_token}</p>
       <p>You have {roles} </p>

       <h2>
         Buy Premium!!
       </h2>
       <button id="manage-subs"> Buy Now!!</button>
       
       
      </header>
    
    </div>
  );
}

export default App;
