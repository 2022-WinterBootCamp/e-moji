import "./header.scss";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-title">
                <Link to="/">
                    <span>IGE MOJI</span>
                </Link>
            </div>
            <div className="header-menu">
                <Link to="/my-page">moji님 환영합니다!</Link>
            </div>
        </div>
    );
};

export default Header;