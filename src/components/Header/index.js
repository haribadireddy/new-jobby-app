import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="logo-image-1"
      />
      <ul className="header-unordered-list">
        <Link to="/">
          <li className="list">Home</li>
        </Link>
        <Link to="/jobs">
          <li className="list">Jobs</li>
        </Link>
      </ul>
      <button className="logout-button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
