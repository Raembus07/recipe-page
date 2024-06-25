
import './headerCss.css';

function Header(props) {
    if (props === 'index') {
        return (
            <nav className="header">
                <a className="headerCurrentItem" href="index.html">Home</a>
                <a className="headerItem" href="vote.html">Vote</a>
            </nav>
        );
    } else {
        return (
            <nav className="header">
                <a className="headerItem" href="index.html">Home</a>
                <a className="headerCurrentItem" href="vote.html">Vote</a>
            </nav>
        );
    }
}

export default Header;