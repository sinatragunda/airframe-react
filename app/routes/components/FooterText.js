import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		(C) { props.year } All Rights Reserved. This is &quot;{ props.name }&quot; built for { props.desc }. 
		Designed and implemented by{' '}
		<a
			href="http://www.taatconsulting.com"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			Taat Consulting
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};

FooterText.defaultProps = {
    year: new Date().getFullYear(),
    name: "Wese Agent Banking",
    desc: "Wese Core Banking Software Company",
};

export { FooterText };
