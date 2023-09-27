import './input.css'
import PropTypes from 'prop-types';

const SliderInput = (props) => {
	return (
		<div className='slider-input-block'>
			<label className='slider-input-text' htmlFor="slider-input">{props.text}</label>
			<input 
				type="range" 
				id="slider-input" 
				name="volume" 
				min="1000" 
				max="10000" 
				step="100"
				onChange={(e) => props.onChange(e.target.value)}
				value={props.value}
			/>
			<label className='slider-input-value' htmlFor="slider-input">{props.value}</label>
		</div>
	)
}

SliderInput.propTypes = {
	text: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.number
};


export default SliderInput