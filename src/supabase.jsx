// src/supabase.jsx
import React, { useEffect, useState } from 'react';
import supabase from './supabaseClient';

const SupabaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <div>
      {user ? (
        <div>Welcome, {user.email}</div>
      ) : (
        <div>Please login to access the app</div>
      )}
      {children}
    </div>
  );
};

export default SupabaseProvider;
