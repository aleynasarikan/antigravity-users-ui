export default function Media() {
    return (
        <>
            <h2>Media</h2>

            <div className="card">
                <h3>Upload banner</h3>
                <input type="file" />
                <button className="btn" style={{ marginTop: 10 }}>
                    Upload
                </button>
            </div>

            <div className="progress">
                <div className="bar" style={{ width: "70%" }} />
            </div>
        </>
    );
}