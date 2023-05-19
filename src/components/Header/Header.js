import './Header.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/icons/upload.svg';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/icons/search.svg';


function Header() {
    return (
    <header className="header">
        <div className="header__logo-container">
            <img className="header__logo"  src={logo} alt="logo"/>
        </div>
        <div className="header__search-bar">
            <img className="header__search-icon" src={searchIcon} alt="Search Icon"/>
            <input id="header__search" type="search" name="search" placeholder='Search'></input>
            <img className="header__avatar" src={avatar} alt="avatar"/>
        </div>
        <div className="header__button-container">
            <button type= "submit" className="header__button">
                <img className="header__button-icon" src={uploadIcon} alt="Upload Icon"/>
                UPLOAD</button>
        </div>
    </header>
    
    );
}

export default Header;