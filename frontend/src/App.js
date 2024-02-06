
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import Register from './components/register';
import Login from './components/login';
import ProtectedRoute from './components/protetedRoute';
import TaskLists from './components/tasksList';

function App() {
  return (
    <Router>
      <div>
      
        <Routes>
        <Route path='/register' Component={Register} />
        <Route path='/login' Component={Login} />
        <Route path='/taskLists' Component={TaskLists} />

        <Route path='/dashboard' element={<ProtectedRoute Component={Dashboard} />} />


        {/* <ProtectedRoute path='/dashboard' Component={Dashboard} /> */}



        </Routes>
      </div>
    </Router>
  );
}

export default App;
