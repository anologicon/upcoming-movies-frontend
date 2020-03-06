import React from 'react';
import './Home.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    fontFamily: "",
  },
  headerh1: {
    marginTop: 60,
  },
  lisGrid: {
    marginTop: 60,
    marginBottom: 30,
  },
  cardPosterMovie: {
    height: 278, // 16:9
  },

}));

export default function Home() {

    const classes = useStyles();

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
                className={classes.headerh1}
              >
                Upcomming Movies
              </Typography>
              <div>
                <Grid container justify="center" >
                  <Grid item xs={12} >
                    <Paper component={Box} overflow="hidden">
                      <Box mt={1} mb={1} mx={2}>
                        <form noValidate autoComplete="off">
                          <TextField 
                            classesName={classes.textField}
                            label="Type to search a awosome movie!"
                            fullWidth 
                          />
                        </form>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container maxWidth="md" className={classes.lisGrid}>
            {/* End hero unit */}
            <Grid container spacing={6}>
              {cards.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card >
                    <CardActionArea>
                      <CardMedia
                        className={classes.cardPosterMovie}
                        image="https://image.tmdb.org/t/p/w185_and_h278_bestv2/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg"
                        title="Poster"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Interestelar
                          <Typography gutterBottom >
                            Release 2019/02/1998
                          </Typography>
                        </Typography>
                        <Typography>
                          Action, Family
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
}