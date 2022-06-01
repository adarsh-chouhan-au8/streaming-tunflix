import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Modal from "../../components/Modal";

const Trailers = ({ title,crew, trailers }) => {
    const classes = useStyles();
    const director = crew
        .filter((elem) => elem.job === "Director")
        .map((elem) => elem.name)
        .join(", ");
    const screenplay = crew
        .filter((elem) => elem.job === "Screenplay")
        .map((elem) => elem.name)
        .join(", ");
    const producer = crew
        .filter((elem) => elem.job === "Producer")
        .map((elem) => elem.name)
        .join(", ");
    const author = crew
        .filter((elem) => elem.job === "Author")
        .map((elem) => elem.name)
        .join(", ");
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {director && (
                    <Typography>
                        <span style={{ fontWeight: "900" }}>Director:</span> {director}
                    </Typography>
                )}
                {screenplay && (
                    <Typography>
                        <span style={{ fontWeight: "900" }}>Screenplay:</span> {screenplay}
                    </Typography>
                )}
                {producer && (
                    <Typography>
                        <span style={{ fontWeight: "900" }}>Producer:</span> {producer}
                    </Typography>
                )}
                {author && (
                    <Typography>
                        <span style={{ fontWeight: "900" }}>Author:</span> {author}
                    </Typography>
                )}
            </Grid>
            {trailers && <Grid item xs={12}>
                {trailers.slice(0,3).map((elem) => (
                    <Paper key={elem} elevation={20} className={classes.iframeContainer}>
                        <iframe
                            title={title}
                            className={classes.iframe}
                            src={`https://www.youtube-nocookie.com/embed/${elem}?rel=0`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            width="400"
                            height="250"
                        />
                    </Paper>
                ))}
            </Grid>}

            <Modal />
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    iframeContainer: {
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%",
        height: 0,
        borderRadius: "4px",
        overflow: "hidden",
    },
    iframe: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
}));

export default Trailers;
