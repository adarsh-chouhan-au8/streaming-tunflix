import React, { useEffect } from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/userActions";
import * as Yup from "yup";

import CircularProgress from "@material-ui/core/CircularProgress";
import Logo from "../../assets/images/logo.png";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, "auto"),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        letterSpacing: "10px",
        margin: theme.spacing(0, 0, 4, 0),
    },
    logo: {
        width: 200,
        marginBottom: theme.spacing(6),
    },
    form: {
        width: "100%", // Fix IE 11 issue.
    },
    submitBtn: {
        margin: theme.spacing(2, 0, 2, 0),
    },
}));

const SignIn = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.userReducer.isLoading);
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            policy: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(20).required("The first name is required"),
            lastName: Yup.string().max(20).required("The name is required"),
            email: Yup.string().email("Email is not valid").required("Email is required"),
            password: Yup.string()
                .min(6, "password must be between 6 and 20 characters")
                .max(20, "the password must be between 6 and 20 characters")
                .required("The password is required"),
            confirmPassword: Yup.string()
                .min(6)
                .max(20)
                .required("Password confirmation is required")
                .oneOf([Yup.ref("password"), null], "Passwords don't match"),
            policy: Yup.boolean().oneOf([true], "You must accept the terms of use"),
        }),
        onSubmit: (values) => {
            dispatch(
                signUp({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                })
            );
        },
        validateOnChange: false,
        validateOnBlur: false
    });

    useEffect(() => {
        if (isAuth) {
            history.push("/browse");
        }
    }, [isAuth, history]);

    return (
        <Container component="main" maxWidth="xs" className={classes.paper}>
            <img src={Logo} className={classes.logo} alt="tunflix" />
            <Typography className={classes.title} component="h1" variant="h4">
                Register
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            autoComplete="off"
                            name="firstName"
                            variant="filled"
                            required
                            fullWidth
                            id="firstName"
                            label="Firstname"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            variant="filled"
                            required
                            fullWidth
                            id="lastName"
                            label="Last name"
                            name="lastName"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            helperText={formik.touched.email && formik.errors.email}
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail address"
                            name="email"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={Boolean(formik.touched.password && formik.errors.password)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            helperText={formik.touched.password && formik.errors.password}
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm password"
                            type="password"
                            id="confirmPassword"
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="policy"
                                    checked={formik.values.policy}
                                    onChange={formik.handleChange}
                                    color="secondary"
                                />
                            }
                            label="I have read and agree to the terms of use"
                        />
                    </Grid>
                    {Boolean(formik.touched.policy && formik.errors.policy) && (
                        <Grid item xs={12}>
                            <FormHelperText error>{formik.errors.policy}</FormHelperText>
                        </Grid>
                    )}
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submitBtn}>
                    {isLoading ? <CircularProgress size={24} color="white" /> : "Submit"}
                </Button>
                <Typography variant="body2">

                    Already have an account?{" "}
                    <Link component={RouterLink} to="/signin" variant="body2">
                        log in.
                    </Link>
                </Typography>
            </form>
        </Container>
    );
};

export default SignIn;
