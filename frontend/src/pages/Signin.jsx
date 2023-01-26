import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Signin() {
	const [inputInfo, setInputInfo] = useState({
		email: "",
		password: "",
	});
	const [signinResult, setSigninResult] = useState({
		type : "info",
		text : "If you don't have account, press SIGN-UP button!",
	})

	const signInOnClick = async () => {
		const url = "http://localhost:5000/users/signin";
		const response = await axios.post(url, inputInfo);
		if (response.data.includes('Success')) {
			setSigninResult({
				type: "success",
				text: "Sign-in success!"
			})
		} else if(response.data.includes('Fail')) {
			setSigninResult({
				type: "warning",
				text: 'Wrong Email or password. Please try again.',
			})
		}
	};

	const signUpOnClick = async () => {
		window.location.href = "http://localhost:3000";
	};

	const textOnChange = (e) => {
		setInputInfo({
			...inputInfo,
			[e.target.name]: e.target.value,
		});
		setSigninResult({
			type : "info",
			text : "If you don't have account, press SIGN-UP button!",
		})
	};

	// useEffect(() => {
	// 	console.log(signinResult);
	// }, [signinResult]);

	return (
		<>
			<Box
				className="signin-container"
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 2, width: "40ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<h1>Sign-in Page</h1>
				<div className="text-fields-box">
					<TextField
						required
						label="Email"
						variant="standard"
						helperText="example@gmail.com"
						name="email"
						onChange={textOnChange}
					/>
					<TextField
						required
						label="Password"
						type="password"
						autoComplete="current-password"
						variant="standard"
						name="password"
						onChange={textOnChange}
					/>
				</div>

				
				<div className="buttons-box">
					<Button
						variant="contained"
						size="medium"
						color="secondary"
						onClick={signUpOnClick}
					>
						Sign-up
					</Button>
					<Button variant="contained" size="medium" onClick={signInOnClick}>
						Sign-in
					</Button>
				</div>
				
			</Box>
		</>
	);
}