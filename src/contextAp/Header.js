import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
    const { da } = useContext(ThemeContext);
    return (
        <header style={{border:'3px solid blue'}}>
            <h1>Header</h1>
            <p>{da.name}</p>
        </header>
    )
}

