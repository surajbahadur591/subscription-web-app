
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

  return (
    <div className="App">
      <header className="App-header">
        <h1> welcome, {user && user.user_metadata.full_name} </h1>
        
       <h1> Sign up for Premium Content</h1>
       <p>Get access to quality stuff!!</p>
       <button onClick={handleLogin}> Login </button>
       
      </header>
    
    </div>
  );
}

export default App;
