import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components/index';

function App() {
 const [loading, setLoading] = useState(true);
 const dispatch = useDispatch();

 useEffect(() => {

  authService.getCurrentUser().then((userData) => {
      try{
            if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout()); 
    }
    
  }
    finally{
      setLoading(false);
    }
  })

 }, [])

return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <h1>Hello prajith</h1>
      <Header />
      <Footer />

    </div>
  </div>
): null
  
 
}

export default App;
