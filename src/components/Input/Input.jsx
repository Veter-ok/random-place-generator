import './input.css'
import PropTypes from 'prop-types';

const SliderInput = (props) => {
	return (
		<div className='slider-input'>
			<input 
				type="range" 
				id="volume" 
				name="volume" 
				min="1000" 
				max="10000" 
				onChange={(e) => props.onChange(e.target.value)}
				value={props.value}
			/>
			<label htmlFor="volume">{props.text}</label>
		</div>
	)
}

SliderInput.propTypes = {
	text: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string
};


export default SliderInput