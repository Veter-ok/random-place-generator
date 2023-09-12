import './button.css'
import PropTypes from 'prop-types';

const Button = (props) => {
	return (
		<button className='basic-button' onClick={props.onClick}>{props.text}</button>
	)
}

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string
};

export default Button