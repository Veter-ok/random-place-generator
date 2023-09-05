import './App.css'
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import { useState } from 'react';

function App() {
  const [currentlyCoord, setCurrentlyCoord] = useState([55.751574, 37.573856])

  return (
    <>
      <h1>My awesome application with maps!</h1>
      <YMaps>
          <Map 
            width={1000} 
            height={600} 
            defaultState={{ center: [55.75, 37.57], zoom: 10 }}
            >
            <Placemark geometry={currentlyCoord} />
          </Map>
      </YMaps>
    </>
  )
}

export default App
