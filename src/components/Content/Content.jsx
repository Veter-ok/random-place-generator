import './Content.css'
import { useState } from 'react';
import { YMaps, Map, Placemark, Circle} from '@pbe/react-yandex-maps';
import { getLocation } from '../../utils/getLocation';
import SliderInput from '../Input/Input';
import Button from '../Button/button';

const Content = () => {
	const [radius, setRadius] = useState(1000)
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

  console.log(radius)

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
			<Button onClick={ShowLocation} text="Показать на карте"/>
			<SliderInput text="Радиус круга" value={radius} onChange={setRadius}/>
		</div>
	)
}

export default Content