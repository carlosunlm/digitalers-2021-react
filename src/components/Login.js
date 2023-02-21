import React from "react";
import { useState } from "react";

function Login (props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const submit = (e) => {
		e.preventDefault();
		if(username === 'eduit' && password === 'eduit') {
			localStorage.setItem('logueado', true);
			props.loguear(true)
		}else {
			localStorage.setItem('logueado', false);
			props.loguear(false)
		}
	}

	return (
		<>
			<div className="row d-flex justify-content-center align-items-center h-100 mt-5">
				<div className="col-md-9 col-lg-6 col-xl-5 mb-3">
				<img src="/assets/images/login.svg" className="img-fluid" alt="Sample image"/>
				</div>
				<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
				<form action="/LoginServlet" method="post">			
					<div className="form-outline mb-4">
					<input 
						name="username" 
						type="text"
						className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Enter a valid email address" aria-describedby="emailHelp"
						value={username}
                		onChange={ event => setUsername(event.target.value)}
						/>
					<label htmlFor="exampleInputEmail1">Username</label> 
					</div>
					<div className="form-outline mb-3">
					<input 
						name="password" 
						type="password" 
						className="form-control form-control-lg" 
						placeholder="Enter password" id="exampleInputPassword1"
						value={password}
                		onChange={ event => setPassword(event.target.value)}/>
					<label htmlFor="exampleInputPassword1">Password</label> 
					</div>
					<div className="text-center text-lg-start mt-4 pt-2">
						<button 
							onClick={e => submit(e)}
							type="button" 
							className="btn btn-primary btn-lg mt-1 w-100">
								Login
						</button>       
					</div>
				</form>
				</div>
			</div>
		</>
	)
}

export default Login;