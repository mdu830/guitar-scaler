import './style.css'
import { Navbar } from 'reactstrap';

export default function GuitarScaler() {
    return (
        <div>
            <div id='scaler'>

            </div>
            <Navbar className="titleBar" color="dark" dark>
                <h2>settings</h2>
            </Navbar>

        </div>
    );
}