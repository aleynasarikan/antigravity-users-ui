import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const { pathname } = useLocation();

    return (
        <aside className="sidebar">
            <h2>Imperium</h2>
            <nav>
                <Link className={pathname === "/users" ? "active" : ""} to="/users">
                    Users
                </Link>
                <Link className={pathname === "/media" ? "active" : ""} to="/media">
                    Media
                </Link>
                <Link className={pathname === "/profile" ? "active" : ""} to="/profile">
                    Profile
                </Link>
                <Link
                    className={pathname === "/settings" ? "active" : ""}
                    to="/settings"
                >
                    Settings
                </Link>
            </nav>
        </aside>
    );
}