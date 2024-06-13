// src/QRCodeGenerator.jsx
import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const canvasRef = useRef();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const downloadQRCode = () => {
    const canvas = canvasRef.current.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' , width: '100%'}}>
      <h1>Nova QRCOODE</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter url"
        style={{ padding: '10px' }}
      />
      <div style={{borderRadius: '10px' }} ref={canvasRef}>
        <QRCodeCanvas style={{
            backgroundColor: 'white', padding: '20px', margin: '20px auto', borderRadius:'10px'
        }} value={text} size={206} />
      </div>
      <button
        onClick={downloadQRCode}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Download QR Code
      </button>
    </div>
  );
};

export default QRCodeGenerator;
