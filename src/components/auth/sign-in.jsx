import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../../styles/auth.css';
import { auth } from '../../utils/firebase.config';
import { userContext } from '../../utils/contexts';

const SignIn = () => {
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
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			if (userCredential.user) {
				navigate('/profile');
			}
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.info(`${errorCode}: ${errorMessage}`);
		}
	}

	return (
		<>
			<main className="page-container">
				<section>
					<div className="auth-page">
						<h2> Sign In </h2>

						<form className="form-container" onSubmit={onSubmit}>
							<div className="form">
								<label htmlFor="email-address">Email</label>
								<input
									className="form-input"
									id="email"
									name="email"
									type="email"
									required
									placeholder="example@gmail.com"
									onChange={onChange}
								/>
							</div>

							<div className="form">
								<label htmlFor="password">Password</label>
								<input
									className="form-input"
									id="password"
									name="password"
									type="password"
									required
									placeholder="str0ngP@ssword"
									onChange={onChange}
								/>
							</div>

							<button className="btn" type="submit">
								Sign In
							</button>
						</form>

						<p>
							No account yet? <Link to="/sign-up">Register</Link>
						</p>
					</div>
				</section>
			</main>
		</>
	);
};

export default SignIn;
