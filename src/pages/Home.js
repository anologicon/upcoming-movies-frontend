import React, { useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import api from '../services/Api';
import {Link} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(theme => ({
  headerh1: {
    marginTop: 60
  },
  lisGrid: {
    marginTop: 60,
    marginBottom: 30
  },
  cardPosterMovie: {
    height: 220 // 16:9
  },
  footer: {
    padding: theme.spacing(6),
    justifyContent: "center"
  }
}));

export default function Home() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const classes = useStyles();

    async function loadMovies() {
      const response = await api.get("", {
        params: { page }
      });

      setMovies(response.data.result);
    }

    useEffect(() => {
    
      loadMovies();

    }, []);

    async function loadMoreMovies() {
      
      let nextPage = page + 1;
      
      setPage(nextPage);

      const response = await api.get("", {
        params: { page: nextPage }
      });

      setMovies([...movies, ...response.data.result]);
    }

    async function searchMovies(stringSearch) {

      if (stringSearch === ''){
        loadMovies();
        return
      }

      const response = await api.get("search", {
        params: { query: stringSearch }
      });

      setMovies([...response.data.result]);
    }
    
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
                Upcoming Movies
              </Typography>
              <div>
                <Grid container justify="center">
                  <Grid item xs={12}>
                    <Paper component={Box} overflow="hidden">
                      <Box mt={1} mb={1} mx={2}>
                        <TextField
                          label="Type to search an awesome movie!"
                          fullWidth
                          onChange={e => searchMovies(e.target.value)}
                        />
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
              {movies.map((movie, key) => (
                <Grid item key={key} xs={12} sm={6} md={6}>
                  <Card>
                    <Link
                      to={{
                        pathname: "/details",
                        state: { movieData: movie }
                      }}
                    >
                      <CardActionArea>
                        {movie.poster !== null ? (
                          <CardMedia
                            className={classes.cardPosterMovie}
                            image={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster}`}
                            title="Poster"
                          />

                        ) : (
                          <CardMedia
                          className={classes.cardPosterMovie}
                              image={`https://dummyimage.com/370x556/424242/fff&text=+`}
                          title="Poster"
                        />

                        )}
                      </CardActionArea>
                    </Link>

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                        <Typography gutterBottom>
                          Release {movie.releaseDate}
                        </Typography>
                      </Typography>
                      <Typography>{movie.genders.join(", ")}</Typography>
                      <CardActions>
                        
                          <Button
                            to={{
                              pathname: "/details",
                              state: { movieData: movie }
                            }}

                            component={Link} variant="contained" color="primary">
                            Details
                          </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Grid container justify="center">
            <Button
              variant="contained"
              onClick={loadMoreMovies}
              color="primary"
            >
              Load More
            </Button>
          </Grid>
        </footer>
      </React.Fragment>
    );
}