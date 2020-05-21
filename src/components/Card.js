import React from "react";
import 'tachyons';

const Card = ({ name, username, email }) => {
    return (
			<div className="bg-light-green dib br3 pa3 ma2 grow">
				<img alt="robots" src="https://robohash.org/test?200x200" />
				<div className="tc">
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
    );
}

export default Card;