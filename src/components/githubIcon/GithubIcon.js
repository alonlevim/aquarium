import React from 'react';

import classes from './GithubIcon.module.css';
export default (props) => {
    return(
    <a target="_blank" href={"https://github.com/alonlevim/aquarium"} className={classes.GithubIcon}>
        {props.children}
    </a>
    )
};