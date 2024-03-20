// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="nav-menu">
      <Link to="/" className="nav-link">
        <li className="nav-item">Home</li>
      </Link>

      <Link to="/about" className="nav-link">
        <li className="nav-item">About</li>
      </Link>
    </ul>
  </div>
)
export default Header
