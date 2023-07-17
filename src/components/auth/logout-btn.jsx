import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../utils/contexts';
import { auth } from '../../utils/firebase.config';
import { signOut } from 'firebase/auth';

export default function LogoutBtn() {
	const [user, setUser] = useContext(userContext);
	const navigate = useNavigate();

	async function handleLogout() {
		await signOut(auth);
		navigate('/sign-in');
	}

	return (
		<button className="btn" onClick={handleLogout}>
			Log out
		</button>
	);
}
