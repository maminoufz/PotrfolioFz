import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode; // Typing children as React.ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuth(); // Accessing user data from context

  // Check if there is no user (user is null)
  if (!user) {
    // If no user is authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  return <>{children}</>; // If authenticated, render the children
};
