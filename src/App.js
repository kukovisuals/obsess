import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {moveTo} from './features/carouselSlice';

import Carousel from './components/Carousel';
import SlickLi from './components/Slick'
// const ROOT_URL = 'https://fakestoreapi.com';
// const product_uri = '/products?limit=5'

function App() {
  const [slick, setSlick] = useState(0)
  const dispatch = useDispatch()
  
  const handleClick = (e) => {
    dispatch( moveTo(e.target.innerText))
    setSlick(e.target.innerText)
  }

  return (
    <div className="App">
      <h1 className="title">New In</h1>
      <Carousel/>
      <ul className="slick-dots" role="tablist">
        <SlickLi index={Number(slick)} change={handleClick} />
      </ul>
    </div>
  );
}

export default App;
