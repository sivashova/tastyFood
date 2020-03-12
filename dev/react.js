import React from 'react';
import ReactDOM from 'react-dom';

class Snippet extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<img src="http://placehold.it/100x100" alt="" />
				<p>{this.props.text}</p>
			</div>
		);
	}
};

ReactDOM.render(
	<div>
		<Snippet title="title1" text="lorem ipsum1" />
		<Snippet title="title2" text="lorem ipsum2" />
	</div>,
	document.getElementById('app')
);