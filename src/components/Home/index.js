import LogoTitle from '../../assets/images/pfp.jpg';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    const handleDownload = () => {
        window.location.href = process.env.PUBLIC_URL + '/CV.pdf';
    };

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/>I'm
                Emmanuel Ravi M. Lara
                <br/>
                </h1>
                <h2>
                Mapúa Malayan Colleges of Laguna
                </h2>
                <h3>Bachelor of Science in Computer Science</h3>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                <button className="flat-button" onClick={handleDownload}>MY CV</button>
            </div>
            <img src={LogoTitle} alt="Profile" />
        </div>
    );
}

export default Home;