import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Route, Routes } from 'react-router';

import links from './links';
import { Navbar, AdminRoute, ErrorBoundary } from '../../components';
import { Dashboard } from '../../pages/Medical';
import Titlebar from '../../components/Titlebar';

import {
	PenalCode,
	Error,
	CreateReport,
	ViewPerson,
	ViewVehicle,
	ViewFirearm,
	ViewReport,
	ViewWarrant,
	SearchPeople,
	SearchVehicle,
	SearchFirearm,
	SearchReport,
	SearchWarrants,
	PermissionManager,
	RosterIndex,
} from '../../pages/Shared';

import { AdminMetrics, AdminCharges, AdminTags, AdminRoster, AdminNotice } from '../../pages/Admin';

import SOPs from '../../pages/Medical/SOPs';
import Comms from '../../pages/Medical/Comms';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100%',
	},
	wrapper: {
		height: '100%',
	},
	content: {
		height: '100%',
		overflowY: 'auto',
		overflowX: 'hidden',
	},
	maxHeight: {
		height: 'calc(100% - 86px)',
	},
}));

export default () => {
	const classes = useStyles();
	const job = useSelector((state) => state.app.govJob);

	return (
		<div className={classes.container}>
			<Grid container className={classes.maxHeight}>
				<Grid item xs={12}>
					<Titlebar />
				</Grid>
				<Grid item xs={2} className={classes.wrapper}>
					<Navbar links={links(job?.Id, job?.Workplace?.Id)} />
				</Grid>
				<Grid item xs={10} className={classes.wrapper}>
					<ErrorBoundary>
						<div className={classes.content}>
							<Routes>
								<Route exact path="/search/reports" element={<SearchReport />} />
								<Route exact path="/create/report" element={<CreateReport />} />
								<Route exact path="/search/reports/:id" element={<ViewReport />} />
								<Route exact path="/roster" element={<RosterIndex />} />
								<Route exact path="/penal-code" element={<PenalCode />} />
								<Route exact path="/sops" element={<SOPs />} />
								<Route exact path="/comms" element={<Comms />} />

								<Route path="/system" element={<AdminRoute permission={true} />}>
									<Route index element={<AdminMetrics />} />
									<Route exact path="charges" element={<AdminCharges />} />
									<Route exact path="tags" element={<AdminTags />} />
									<Route exact path="gov-roster" element={<AdminRoster />} />
									<Route exact path="gov-permissions" element={<PermissionManager job="system" />} />
								</Route>

								<Route exact path="create/notice" element={<AdminNotice />} />

								<Route path="/admin" element={<AdminRoute permission={'SAFD_HIGH_COMMAND'} />}>
									<Route exact path="permissions" element={<PermissionManager job="ems" />} />
								</Route>

								<Route exact path="/" element={<Dashboard />} />
								<Route element={<Error />} />
							</Routes>
						</div>
					</ErrorBoundary>
				</Grid>
			</Grid>
		</div>
	);
};
