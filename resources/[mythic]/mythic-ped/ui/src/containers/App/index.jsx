import React, { Fragment, useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Fade } from '@mui/material';

import { Loader } from '../../components/UIComponents';
import Creator from '../Creator';
import Shop from '../Shop/Shop';
import Surgery from '../Surgery/Surgery';
import Tip from '../Tip';
import Barber from '../Barber';
import Tattoo from '../Tattoo';

library.add(fab, fas, far);

const useStyles = makeStyles((theme) => ({
	content: {
		position: 'relative',
		height: '100%',
		width: '100%',
		overflow: 'hidden',
	},
}));

export default connect()((props) => {
	const classes = useStyles();
	const hidden = useSelector((state) => state.app.hidden);
	const state = useSelector((state) => state.app.state);
	const loading = useSelector((state) => state.app.loading);
	const [display, setDisplay] = useState(<Fragment />);

	useEffect(() => {
		switch (state) {
			case 'CREATOR':
				setDisplay(<Creator />);
				break;
			case 'SHOP':
				setDisplay(<Shop />);
				break;
			case 'BARBER':
				setDisplay(<Barber />);
				break;
			case 'TATTOO':
				setDisplay(<Tattoo />);
				break;
			case 'SURGERY':
				setDisplay(<Surgery />);
				break;
			default:
				setDisplay(<Fragment />);
				break;
		}
	}, [state]);

    const backgroundImage = process.env.NODE_ENV !== 'production'
        ? 'url(https://cdn.discordapp.com/attachments/829372825419776031/1166962060911976508/image.png?ex=66b44e9c&is=66b2fd1c&hm=10916a8164421845c97e2721063fc15bb07d4500c382ba01b6638bf81a5a3136&)'
        : 'none';
  
    const appStyle = {
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
		zIndex: '-999 !important'
    };

	return (
		<Fade in={!hidden}>
			<div className="App" style={appStyle}>
				{loading ? <Loader /> : display}
				<Tip />
			</div>
		</Fade>
	);
});
