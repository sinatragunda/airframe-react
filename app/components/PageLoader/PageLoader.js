import React from 'react';

import classes from './PageLoader.scss';

const PageLoader = ({message}) => (
    <div className={ classes.pageLoader }>Loading...{message}</div>
);


PageLoader.defaultProps = {
    message : ""
}

export default PageLoader;