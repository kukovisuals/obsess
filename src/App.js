import {useEffect, useState} from 'react';
import axios from 'axios';
import ImageRow from './components/ImageRow/ImageRow';

const ROOT_URL = 'https://fakestoreapi.com';
function App() {
  const [userData,setuserData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUserData = async() => {
      setLoading(true)
      try{
        const {data: response} = await axios.get(`${ROOT_URL}/products`)
        setuserData(response)
      } catch(error) {
        console.error(error.message)
      }
      setLoading(false)
    }   

    getUserData();
  },[])

  console.log(userData, loading)
  return (
    <div className="App">
      <ImageRow/>
    </div>
  );
}

export default App;
