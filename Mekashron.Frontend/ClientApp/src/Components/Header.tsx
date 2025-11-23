import { Button, ButtonGroup, Stack } from "react-bootstrap";
import mekashronLogo from "../Images/mekashron_logo.png";
import "./Header.css"

export function Header() {
    return (
        <div className="header-root d-flex flex-row bg-white p-2 w-100 justify-content-between sticky-top">
            <img src={mekashronLogo} className="logo" alt="Mekashron logo" />
            <ButtonGroup className="menu-group">
                <Button className="menu-btn">Menu 1</Button>
                <Button className="menu-btn">Menu 2</Button>
                <Button className="menu-btn">Menu 3</Button>
            </ButtonGroup>
        </div>
    );
}