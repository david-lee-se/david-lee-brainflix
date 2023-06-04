import './Header.scss';
import { Link } from 'react-router-dom';
import uploadIcon from '../../assets/images/upload.svg';
import logo from '../../assets/images/BrainFlix-logo.svg';
import searchLogo from '../../assets/images/search.svg';



function Header(props) {
    
    return (
    <header className="header">
        <div className="header__logo-container">
            <Link to={'/'} className='header__logo-link'>
                <img className="header__logo"  src={logo} alt="logo"/>
            </Link>
        </div>
        <div className='header__search-container'>
        <div className="header__search-bar">
            <img className="header__search-icon" src={searchLogo} alt="Search Logo"/>
            <input id="header__search" type="search" name="search" placeholder='Search'></input>
            <img className="header__avatar" src={props.avatar} alt="avatar"/>
        </div>
        <div className="header__button-container">
            <Link to={'/VideoUpload'} >
                <button type= "submit" className="header__button">
                    <img className="header__button-icon" src={uploadIcon} alt="upload icon"/>
                    UPLOAD
                </button>
            </Link>
        </div>
        </div>
    </header>
    
    );
}

export default Header;