import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// This is the figgin nav bar component
// TODO font awesome icons check and apply 
// I would put comments between the elements but come one 
// Just know this is the navbar and we have to fix fontawesome 

function NavBar() {
  return(
    <div className='navbar'>
      <ul className='navbarnav'>
        <li className='navitem'>
          <a className='navlink' href='#'>
            <FontAwesomeIcon icon="fa-solid fa-lungs" />
            <span className='navtext'>Home</span>
          </a>
        </li>
        <li className='navitem'>
          <a className='navlink' href='#'>
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <span className='navtext'>About</span>
          </a>
        </li>
        <li className='navitem'>
          <a className='navlink' href='#'>
            <FontAwesomeIcon icon="fa-solid fa-lungs" />
            <span className='navtext'>calendar</span>
          </a>
        </li>
        <li className='navitem'>
          <a className='navlink' href='#'>
            <FontAwesomeIcon icon="fa-solid fa-lungs" />
            <span className='navtext'>profile</span>
          </a>
        </li>
        <li className='navitem'>
          <a className='navlink' href='#'>
            <FontAwesomeIcon icon="fa-solid fa-lungs" />
            <span className='navtext'>config</span>
          </a>
        </li>
      </ul>
    </div>
  )
}


export default NavBar