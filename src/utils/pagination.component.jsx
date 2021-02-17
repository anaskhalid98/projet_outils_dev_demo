import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display:"flex",
			justifyContent:"center",
			'& > *': {
				marginTop: theme.spacing(2),
				marginBottom: theme.spacing(10)
			},
		},
	}),
);

export default function BlogPagination() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Pagination count={10} color="primary" />
		</div>
	);
}
