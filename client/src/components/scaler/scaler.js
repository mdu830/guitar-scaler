import './style.css'
import { Navbar } from 'reactstrap';
import ScalerGrid from './scalerGrid';

export default function GuitarScaler() {
    return (
        <div id="application">
            <div id='scaler'>
                <ScalerGrid />
            </div>
            <Navbar className="titleBar" color="dark" dark>
                <h2>settings</h2>
            </Navbar>

        </div>
    );
}