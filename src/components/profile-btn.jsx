import {React, useContext} from 'react'
import { userContext } from '../utils/contexts'
import { Link } from 'react-router-dom'


export default function ProfileBtn() {

  const [user, setUser] = useContext(userContext)

  function firstLetter() {
    if ( user && user.email !== null ) {
      return user.email[0].toUpperCase()
    } else {
      return "D"
    }
  }

  return (
		<Link to="/profile" className="profil">
			<p>{firstLetter()}</p>
		</Link>
  );
}
