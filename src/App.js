import {useState} from 'react';
import Carousel from './components/Carousel';
import {useDispatch} from 'react-redux';
import {moveTo} from './features/carouselSlice';
// const ROOT_URL = 'https://fakestoreapi.com';
// const product_uri = '/products?limit=5'

function App() {
  const [slick, setSlick] = useState(0)
  const dispatch = useDispatch()
  
  const handleClick = (e) => {
    dispatch( moveTo(e.target.innerText))
    setSlick(e.target.innerText)
  }

  const SlickLi = ({index}) => {
    const newArray = new Array(5).fill(0)
    return newArray.map((d,i) => {
        console.log(i)
        return (
          <li className={index === i ? 'slick-active' : ''} role="presentation" key={i}>
            <button onClick={handleClick} role="tab" id="slick-control">{i}</button>
          </li>
         )
      })
  }
  return (
    <div className="App">
      <h1 className="title">New In</h1>
      <Carousel/>
      <ul className="slick-dots" role="tablist">
        <SlickLi index={Number(slick)}/>
      </ul>
    </div>
  );
}

export default App;
