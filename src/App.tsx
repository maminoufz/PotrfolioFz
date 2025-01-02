import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { MainLayout } from './components/MainLayout';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { AddCaseStudy } from './components/AddCaseStudy';
import LoginForm from './components/LoginForm';
import FetchData from './data/casdata';


export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/dashboard" element={<MainLayout />} />
          <Route path="/casdata" element={<FetchData />} />
          <Route
            path="/add-case"
            element={
              <PrivateRoute>
                <AddCaseStudy />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}