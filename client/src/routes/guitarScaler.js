import Header from "../components/header/header";
import GuitarScaler from "../components/scaler/scaler";
// import './style.css'


export default function Scaler() {
    return (
        <main style={{ paddingTop: "100px", color: "white" }}>
            <Header />
            <GuitarScaler />
        </main>
    );
}