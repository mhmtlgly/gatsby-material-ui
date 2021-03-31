import React, { Fragment, useState, useEffect, ReactNode } from "react"
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  OutlinedInput,
  Box,
  FormHelperText,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FaEyeSlash, FaEye } from "react-icons/fa"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    maxWidth: 600,
    margin: "0 auto",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}))

type FormData = {
  email: string
  password: string
  passwordConfirm: string
}

const FormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Incorrect E-Mail format.")
    .required("E-Mail is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters long"),
  passwordConfirm: yup
    .string()
    .required("Password doesn't match")
    .oneOf([yup.ref("password"), null], "Password must match"),
})

export const ReactHooksForm = () => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    errors,
    setError,
    formState,
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  })

  const { isDirty, isValid } = formState

  const onSubmit = data =>
    console.log(
      `%c ${JSON.stringify(data, null, 2)}`,
      "background: #222; color: #bada55"
    )

  // useEffect(() => console.log(isValid), [formState])

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
        noValidate
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          inputRef={register}
          error={Boolean(errors.email)}
          helperText={errors.email ? errors.email.message : null}
        />

        <FormControl
          variant="outlined"
          fullWidth
          required
          error={Boolean(errors.password) ? true : false}
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            aria-describedby="password_helpertext"
            inputRef={register}
            error={Boolean(errors.password)}
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
            labelWidth={85}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error id="password_helpertext">
            {errors.password ? errors.password.message : null}
          </FormHelperText>
        </FormControl>
        <TextField
          variant="outlined"
          helperText={
            errors.passwordConfirm ? errors.passwordConfirm.message : null
          }
          error={Boolean(errors.passwordConfirm)}
          margin="normal"
          required
          fullWidth
          label="Confirm Password"
          name="passwordConfirm"
          inputRef={register}
          type="password"
        />
        <Button
          disabled={isValid ? false : true}
          className={classes.button}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          //   className={classes.submit}
          // disabled={data.email && data.password ? false : true}
        >
          Sign Up
        </Button>
      </form>
    </Fragment>
  )
}
