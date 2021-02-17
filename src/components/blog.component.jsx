import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BlogPagination from "../utils/pagination.component";
import SchoolIcon from '@material-ui/icons/School';
import BlogCard from "../utils/blog-card.component";
import {postData} from "../data_mocks/post-data";


const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: '#FFF',
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.primary.light,
		padding: theme.spacing(6),
	},
}));


export default function Blog() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline/>
			{/*the header*/}
			<AppBar position="relative">
				<Toolbar>
					<SchoolIcon className={classes.icon}/>
					<Typography variant="h6" color="inherit" noWrap>
						ENSIAS Blog
					</Typography>
				</Toolbar>
			</AppBar>
			{/*the main blog*/}
			<main>

				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							Welcome To Ensias Blog
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Ensias Blog is where you find news about technology and, student life and activities in
							Ensias. You can join us if you want to write about your favorite technologies or Ensias
							events.
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant="contained" color="primary">
										Sign Up
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Login
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md">
					{/* End hero unit */}
					<Grid container spacing={4}>
						{postData.map((card, index) => (

							<Grid item key={index} xs={12}>
								<BlogCard postData={card}/>
							</Grid>
						))}
					</Grid>
				</Container>
				<BlogPagination/>
			</main>
		</React.Fragment>
	);
}
