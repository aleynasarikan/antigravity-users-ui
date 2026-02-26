export default function Profile() {
    return (
        <>
            <h2>Edit Profile</h2>

            <div className="card form">
                <label>Name</label>
                <input defaultValue="Aleyne Sarikan" />

                <label>Position</label>
                <input defaultValue="Software Developer" />

                <label>Department</label>
                <input defaultValue="Design" />

                <div style={{ marginTop: 15 }}>
                    <button className="btn">Save</button>
                </div>
            </div>
        </>
    );
}