export default function Settings() {
    return (
        <>
            <h2>Settings</h2>

            <div className="card form">
                <label>Week start</label>
                <select>
                    <option>Monday</option>
                    <option>Sunday</option>
                </select>

                <label>Notifications</label>
                <select>
                    <option>Enabled</option>
                    <option>Disabled</option>
                </select>

                <div style={{ marginTop: 15 }}>
                    <button className="btn">Save</button>
                </div>
            </div>
        </>
    );
}