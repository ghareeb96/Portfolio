import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const LinearWithValueLabel = (props) => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(props.value);

    return (
        <div className={classes.root}>
            <LinearProgressWithLabel value={progress} />
        </div>
    );
}

export default LinearProgressWithLabel;