import './Content.css'
import { useState, useCallback } from 'react';
import { YMaps, Map, Placemark, Circle} from '@pbe/react-yandex-maps';
import { getLocation } from '../../utils/getLocation';
import { getNewLocation} from '../../utils/getNewLocation';
import SliderInput from '../Input/Input';
import Button from '../Button/button';

const Content = () => {
	const [radius, setRadius] = useState(1000)
	const [coor, setCoor] = useState([0, 0])
	const [currentlyCoord, setCurrentlyCoord] = useState([55.751574, 37.573856])

	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	}
  
  const showLocation = () => {
    const crd = getLocation(navigator.geolocation.getCurrentPosition((pos) => {
		setCurrentlyCoord([pos.coords.latitude, pos.coords.longitude])
    }, (error) => {
      console.log(error)
    }, options))
    console.log(crd)
  }
  
  const instanceRef = useCallback((ref) => {
    if (ref) {
      ref.geometry.events.add('change', (e) => setCurrentlyCoord(e.get('newCoordinates')));
    }
  }, []);

  function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
  }

  const findNewPlace = () => {
	const coor1 = getNewLocation(getRandomArbitrary(0, radius), getRandomArbitrary(0, 360) * Math.PI / 180, currentlyCoord[0], currentlyCoord[1])
	setCoor([coor1[0], coor1[1]])
  }

	return (
		<div className='content'>
			<h1>My awesome application with maps!</h1>
			<div className='map'>
				<YMaps>
					<Map 
						width="100%"
						height={550} 
						defaultState={{ center: [55.75, 37.57], zoom: 13 }}
						>
						<Placemark geometry={coor} options={{draggable: true}}/>
						<Placemark 
							geometry={currentlyCoord} 
							instanceRef={instanceRef}
							options={{draggable: true, iconColor: "rgb(218, 16, 22)"}}
						/>
						<Circle
							geometry={[currentlyCoord, Number(radius)]}
							options={{
								draggable: false,
								fillColor: "#DB709377",
								strokeColor: "#990066",
								strokeOpacity: 0.8,
								strokeWidth: 5,
							}}
						/>
					</Map>
				</YMaps>
			</div>
			<Button onClick={showLocation} text="Показать на карте"/>
			<SliderInput text="Радиус круга" value={radius} onChange={setRadius}/>
			<Button onClick={findNewPlace} text="Найти место"/>
		</div>
	)
}

export default Content