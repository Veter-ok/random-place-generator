import './Content.css'
import { useState } from 'react';
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import { getLocation } from '../../utils/getLocation';

const Content = () => {
	const [currentlyCoord, setCurrentlyCoord] = useState([55.751574, 37.573856])

	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	}
  
  const ShowLocation = () => {
    const crd = getLocation(navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentlyCoord([pos.coords.latitude, pos.coords.longitude])
    }, (error) => {
      console.log(error)
    }, options))
    console.log(crd)
  }

	return (
		<div className='content'>
			<h1>My awesome application with maps!</h1>
			<div className='map'>
				<YMaps>
					<Map 
						width={1000} 
						height={600} 
						defaultState={{ center: [55.75, 37.57], zoom: 10 }}
						>
						<Placemark geometry={currentlyCoord} />
					</Map>
				</YMaps>
			</div>
			<button onClick={ShowLocation}>Показать на карте</button>
		</div>
	)
}

export default Content