import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: 'fit-content',
		width: 'fit-content',
		background: theme.palette.secondary.dark,
		position: 'fixed',
		bottom: 0,
		right: 0,
		padding: 5,
		fontSize: 22,
		// border: `1px solid ${theme.palette.border.divider}`,
		// borderTop: 'none',
		borderRadius: '.75rem 0 0 0'
	},
	text: {
		color: theme.palette.text.main,
		padding: 14,
		fontSize: 16,
		letterSpacing: 1,
		textTransform: 'uppercase',
		whiteSpace: 'nowrap',
		display: 'flex',
		flexDirection: 'row',
		gap: '10px',
		userSelect: 'none'
	},
	key: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
	},
}));

export default (props) => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.text}>
				<div>
					<span className={classes.key}>Q</span>
					<span>{` / `}</span>
					<span className={classes.key}>E</span>: Rotate
				</div>
				<div>
					<span className={classes.key}>Mousewheel</span>: Zoom
				</div>
				<div>
					<span className={classes.key}>R</span>: Animation
				</div>
				<div>
					<span className={classes.key}>G</span>: Spotlight
				</div>
			</div>
		</div>
	);
};
