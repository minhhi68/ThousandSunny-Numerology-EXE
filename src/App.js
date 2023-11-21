import './App.css';
import AnalyzeCompleteComponent from './components/analyze-complete-component/analyze-complete-component';
import { AnalyzeComponent } from './components/analyze-component/analyze-component';
import AnalyzeDestinyComponent from './components/analyze-destiny-component/analyze-destiny-component';
import AnalyzeDetailComponent from './components/analyze-detail-component/analyze-detail-component';
import AnalyzeGeneralComponent from './components/analyze-general-component/analyze-general-component';
import BuyVipComponent from './components/buy-vip-component/buy-vip-component';
import HeaderComponent from './components/header-component/header-component';
import Login from './components/login/login';
import PaymentConfirmComponent from './components/payment-confirm-component/payment-confirm-component';
import Register from './components/register/register';
import WelcomeComponent from './components/welcome/welcome-component';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import PaypalComponent from './components/paypal-component/paypal-component';

function App() {


  const PrivateRoutes = () => {
    let auth = JSON.parse(localStorage.getItem("user"))
    return (
      auth ? <Outlet /> : <Navigate to="/login" />
    )
  }

  return (
    <>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<WelcomeComponent />} />
            <Route path="/analyze-complete" element={<AnalyzeCompleteComponent />} />
            <Route path="/analyze-page" element={<AnalyzeComponent />} />
            <Route path="/analyze-destiny-page" element={<AnalyzeDestinyComponent />} />
            <Route path="/buy-vip" element={<BuyVipComponent />} />
            <Route path="/payment-confirm" element={<PaymentConfirmComponent />} />
            <Route path="/analyze-general" element={<AnalyzeGeneralComponent />} />
            <Route path="/analyze-detail" element={<AnalyzeDetailComponent />} />
            <Route path="/checkout" element={<PaypalComponent />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
