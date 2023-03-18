import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.min.css"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Button, Space } from 'antd';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <h1>CVWizard</h1>
      <h5>Create professional CV</h5>
      <Button type='primary'>Create CV</Button> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("CVWizard-user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
