import {useEffect, useState} from 'react';
import axios from 'axios';
// import {useDispatch,useSelector} from 'react-redux';
import Carousel from './components/Carousel';

const ROOT_URL = 'https://fakestoreapi.com';
const product_uri = '/products?limit=5'

const select = (state) => state
function App() {
  const [productData,setProductData] = useState([])
  const [error,setError] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    axios.get(ROOT_URL+product_uri)
      .then(res => {
        const {data: response} = res
        setProductData(response)
      })
      .then(setLoading(false))
      .catch(setError)
  },[])

  console.log(loading)
  return (
    <div className="App">
      <h1 className="title">New In</h1>

      {loading && <p>... loading</p>}
      {productData.length > 0 && <Carousel data={productData}/>}
      
      <ul className="slick-dots" role="tablist">
        <li className="slick-active" role="presentation">
          <button role="tab" id="slick-control">1</button>
        </li>
        <li className="slick-active" role="presentation">
          <button role="tab" id="slick-control">2</button>
        </li>
        <li className="slick-active" role="presentation">
          <button role="tab" id="slick-control">3</button>
        </li>
        <li className="slick-active" role="presentation">
          <button role="tab" id="slick-control">4</button>
        </li>
        <li className="slick-active" role="presentation">
          <button role="tab" id="slick-control">4</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
