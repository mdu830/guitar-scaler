import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Navbar, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'





function Header(props) {

    return (
        <>
            <div>
                <Navbar className="titleBar" color="dark" dark expand="md" fixed="top">
                    <NavLink>
                    </NavLink>
                    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="appTitle">Guitar Scaler</h1></Link>

                    <div className="m-4"></div>
                </Navbar>
            </div>
        </>
    )
}

export default Header;