import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  headerh1: {
    marginTop: 10
  },
  lisGrid: {
    marginTop: 60,
    marginBottom: 30
  },
  footer: {
    padding: theme.spacing(6),
    justifyContent: "center"
  }
}));

export default function MovieDetail({ location }) {

    const movieData = location.state.movieData;

    const classes = useStyles();


    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.headerh1}
            >
              {movieData.title}
            </Typography>
            <Grid container justify="center">
              <Grid item xs={6}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="556"
                    width="370"
                    image={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movieData.poster}`}
                    title={movieData.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                      Overview
                    </Typography>
                    <Typography gutterBottom>{movieData.overview}</Typography>
                    <Typography gutterBottom variant="h5" component="h5">
                      Release Date
                    </Typography>
                    <Typography gutterBottom>
                      {movieData.releaseDate}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h5">
                      Genres
                    </Typography>
                    <Typography>{movieData.genders.join(", ")}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
}
