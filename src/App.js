import "./App.css";

import { useState } from "react";

import QRCode from "qrcode.react";

function App() {
    const [url, setUrl] = useState("");

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    };

    return (
        <div className="container">
            <h1>QR Code Generator</h1>
            <input
                type="text"
                value={url}
                onChange={handleInputChange}
                placeholder="Enter URL"
            />

            {url && (
                <div className="qrcode">
                    <QRCode value={url} size={128} />
                </div>
            )}
        </div>
    );
}

export default App;
