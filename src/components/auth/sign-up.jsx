import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword as createUser } from 'firebase/auth';
import { auth } from '../../utils/firebase.config';
import { userContext } from '../../utils/contexts';

const Signup = () => {
	const [user, setUser] = useContext(userContext);

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	function onChange(e) {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	}

	async function onSubmit(e) {
		e.preventDefault();
		try {
			const userCredential = await createUser(auth, email, password);
			navigate('/');
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.info(`${errorCode}: ${errorMessage}`);
		}
	}

	return (
		<main className="page-container">
			<section>
				<div>
					<div className="auth-page">
						<h1> Register </h1>
						<form className="form-container" onSubmit={onSubmit}>
							<div className="form">
								<label htmlFor="email-address">Email</label>
								<input
									className="form-input"
									type="email"
									id="email"
									label="Email address"
									value={email}
									onChange={onChange}
									required
									placeholder="example@gmail.com"
								/>
							</div>

							<div className="form">
								<label htmlFor="password">Password</label>
								<input
									className="form-input"
									type="password"
									id="password"
									label="Create password"
									value={password}
									onChange={onChange}
									required
									placeholder="str0ngP@ssword"
								/>
							</div>

							<button className="btn" type="submit">
								Sign up
							</button>
						</form>

						<p>
							Already have an account?{' '}
							<Link to="/sign-in">Sign in</Link>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Signup;
