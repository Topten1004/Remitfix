import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Transfer from './pages/Transfer';
import Recipient from './pages/Recipient';
import Invite from './pages/Invite';
import Verification from './pages/Verification';
import SendAmount from './pages/SendAmount';
import SelectRecipient from './pages/SelectRecipient';
import DeliveryOption from './pages/DeliveryOption'
import ReviewDetails from './pages/ReviewDetails';
import Download from './pages/Download';
import TransferDetails from './pages/TransferDetails';
import CustomerDetails from './pages/CustomerDetails';
import ForgotPassword from './pages/Forgotpass';
import Resetpass from './pages/Resetpass';
import Settings from './pages/Settings';
import PayTransfer from './pages/PayTransfer';
import BusinessProfile from './pages/BusinessProfile';
import AddCustomer from './pages/AddCustomer';
import AddRecipient from './pages/AddRecipient';
import Upgrade from './pages/Upgrade';
import Tier from './pages/Tier';
import Home from './pages/Home';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { element: <Navigate to="/login" replace /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/home" /> },
        { path: '*', element: <Navigate to="/404" /> },
        { path: 'amount', element: <SendAmount /> },
        { path: 'select_recipient', element: <SelectRecipient /> },
        { path: 'delivery_options', element: <DeliveryOption /> },
        { path: 'review/details', element: <ReviewDetails /> },
        { path: 'reset', element :<ForgotPassword />},
        { path: 'resetpass', element : <Resetpass />},
        { path: 'paytransfer', element : <PayTransfer />},
        { path: 'add/customer', element : <AddCustomer /> },
        { path: 'add/recipient', element : <AddRecipient />}
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'transfer', element: <Transfer /> },
        { path: 'recipient', element: <DashboardApp /> },
        { path: 'verification', element: <Verification /> },
        { path: 'settings', element: <Settings /> },
        { path: 'transfer/details', element: <TransferDetails /> },
        { path: 'customer/details', element: <CustomerDetails />},
      ]
    },
    {
        path: '/',
        children :[
          { path: '/download', element: <Download /> } ,
          { path: '/invite', element: <Invite /> } ,
          { path: '/business', element: <BusinessProfile /> },
          { path: '/upgrade', element: <Upgrade /> },
          { path: '/tier', element: <Tier /> },
          { path: '/home', element: <Home />}
        ]
    },
    { 
        path: '*', element: <Navigate to="/404" replace /> 
    }
  ]);
}
