import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './PrivateRoute'; // Import the custom PrivateRoute component



function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

// function App() {
//     return (
//       <div className="App">
//         <Provider store={store}>
//           <BrowserRouter>
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <PrivateRoute path="/home" element={<Home />} /> {/* Secure the Home route */}
//               <PrivateRoute path="/cart" element={<Cart />} /> {/* Secure the Cart route */}
//             </Routes>
//           </BrowserRouter>
//         </Provider>
//       </div>
//     );
//   }

export default App;
