import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@supabase/supabase-js"; // Import User type from Supabase
import supabase from "../supabaseClient"; // Make sure supabaseClient is correctly imported

interface AuthContextType {
  user: User | null;
  logout: () => void; // Define the logout function here
}

const AuthContext = createContext<AuthContextType | null>(null); // Context can be null initially

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context; // Return the context value (user and logout)
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut(); // Ensure you log out from Supabase
    setUser(null); // Set user to null after logout
  };

  if (loading) {
    return <div>Loading...</div>; // Optionally show loading spinner
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children} {/* Render child components */}
    </AuthContext.Provider>
  );
};
