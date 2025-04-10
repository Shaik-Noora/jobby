import './index.css'

import {Link, withRouter} from 'react-router-dom'
import {Cookies} from 'js-cookie'

const Header = () => {
  const logOut = props => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <nav className="navv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
        <ul className="ull">
          <Link to="/" className="nav-text">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="nav-text">
            <li>Jobs</li>
          </Link>
        </ul>
        <button className="btn" onClick={logOut}>
          Logout
        </button>
      </nav>
    </>
  )
}
export default withRouter(Header)
