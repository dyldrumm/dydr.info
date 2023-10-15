import { Component } from "react";
import { MenuData } from "./Menudata";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
            <nav className="Navbar">
                <h1>
                    Test-Navbar <i className="nav-wrap"></i>
                    </h1>
                    <ul className="nav-menu">
                        {MenuData.map((item, index) => {
                            return(
                            <li key={index}>
                            <a href={item.url}
                            className={item.cName}>
                            <i className={item.icon}>
                           </i>{item.title}
                           </a>
                           </li>
                           );
                        })}
                    </ul>
            </nav>
        );
    }
}

export default Navbar