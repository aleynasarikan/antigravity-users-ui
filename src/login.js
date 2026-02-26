import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <div className="loginCard">
                <h2>Imperium</h2>

                <input placeholder="Email" />
                <input placeholder="Password" type="password" />

                <Link to="/users">
                    <button className="btn" style={{ width: "100%" }}>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
}