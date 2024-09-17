import React from 'react';
import ReactDOM  from 'react-dom';
import QRCode from "./components/qrcode";
import AppBar from '@mui/material/AppBar';

function App() {
  return (
    <AppBar
    position="fixed"
    sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 10 }}
  >
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>QrOrder管理画面</h1>
      <QRCode url="https://reactjs.org/"/>
    </div>
    </AppBar>
  );
}

export default App;
