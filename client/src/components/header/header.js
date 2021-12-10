import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Navbar, NavLink } from 'reactstrap';





function Header(props) {

    return (
        <>
            <div>
                <Navbar className="titleBar" color="dark" dark expand="md" fixed="top">
                    <NavLink>
                    </NavLink>
                    <NavLink>
                        <h1 className="appTitle">Guitar Scaler</h1>
                    </NavLink>

                    <div className="m-4"></div>
                </Navbar>
            </div>
        </>
    )
}

export default Header;