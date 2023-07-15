import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from '../../contexts/user-context';
import { auth } from '../../utils/firebase';

export default function LogoutBtn() {

  const [user, setUser] = useContext(userContext);
  const navigate = useNavigate();

	function handleLogout() {
		auth.signOut();
		navigate('/sign-in');
    setUser(null);
	}
  
	return <button className='btn' onClick={handleLogout}>Log out</button>;
}
