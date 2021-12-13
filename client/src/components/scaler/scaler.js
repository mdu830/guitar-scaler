import './style.css'
import { Navbar } from 'reactstrap';
import ScalerGrid from './scalerGrid';

export default function GuitarScaler() {
    return (
        <div id="application">
            {/* <Navbar className="titleBar" color="dark" dark>
                <h2>settings</h2>
            </Navbar> */}
            <div id='scaler'>
                <ScalerGrid id="e"/>
            </div>
            {/* <Navbar className="titleBar" color="dark" dark>
                <h2>settings</h2>
            </Navbar> */}

        </div>
    );
}