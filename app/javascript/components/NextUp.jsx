import React from 'react';
import NextUpCard from './NextUpCard';
import PropTypes from 'prop-types';

export default class NextUp extends React.Component {
	static propTypes = {
		tasks: PropTypes.array.isRequired,
		leftCardIndex: PropTypes.number.isRequired,
		rightCardIndex: PropTypes.number.isRequired,
		cycleCardPile: PropTypes.func.isRequired,
		checkboxChange: PropTypes.func.isRequired,
	}
	
	render() {
		var tasks = this.props.tasks;
		var leftCardIndex = this.props.leftCardIndex;
		var rightCardIndex = this.props.rightCardIndex;

		const cycleBackIcon = <svg width="12" height="12" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.11121 10.0146L1.10394 5.30332L3.77971 6.53828L6.18454 7.6482L2.11121 10.0146Z" fill="black"/>
			<path d="M12.521 14.9083C21.8338 5.30328 8.95493 -7.32752 2.11121 10.0146M2.11121 10.0146L1.10394 5.30332L6.18454 7.6482L2.11121 10.0146Z" stroke="black"/>
		</svg>
		
		if (tasks.length == 0) {
			return <div className="next-up">
				<div className="next-up-label">Next Up</div>
				No tasks
			</div>
		}

		return <div className="next-up">
			<div className="next-up-label">Next Up</div>
			<div className="next-up-cards">
				<div className="column">
					<div className="card-and-buttons">
						<NextUpCard task={tasks[leftCardIndex]} checkboxChange={this.props.checkboxChange} />
						<button className="reverse-cycle-card-stack-button" 
							onClick={() => { this.props.cycleCardPile("left", -1) }}
							style={{ display: leftCardIndex == 0 ? "none" : "block" }}
						>{cycleBackIcon}</button>
						<button className="cycle-card-stack-button" 
							onClick={() => { this.props.cycleCardPile("left", 1) }}
							disabled={leftCardIndex + 1 >= rightCardIndex}
						>Not now</button>
					</div>
				</div>
				<div className="or">or</div>
				<div className="column">
					<div className="card-and-buttons">
						<NextUpCard task={tasks[rightCardIndex]} checkboxChange={this.props.checkboxChange} />
						<button className="reverse-cycle-card-stack-button" 
							onClick={() => { this.props.cycleCardPile("right", 1) }}
							style={{ display: rightCardIndex == tasks.length - 1 ? "none" : "block" }}
						>{cycleBackIcon}</button>
						<button className="cycle-card-stack-button" 
							onClick={() => { this.props.cycleCardPile("right", -1) }}
							disabled={rightCardIndex - 1 <= leftCardIndex}
						>Not now</button>
					</div>
				</div>
			</div>
		</div>
	}
}
