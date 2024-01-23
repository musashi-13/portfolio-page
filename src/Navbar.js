import mainLogo from './mainlogowide.png';

function Navbar() {
    return(
        <div className="nav-bar">
                <div><img src={mainLogo} width="140" height="27" className="nav-bar-logo" alt='main-logo'></img></div>
                <div className="container-menu-buttons">
                <button className="menu-button home">Home</button>
                <button className="menu-button projects">Projects</button>
                <button className="menu-button about">About Me</button>
            </div>
            <div style={{width: "100px"}}><input type="checkbox" className="theme-checkbox"></input></div>   
        </div>
    )
}

export default Navbar