import { useEffect } from "react";
import supabase from "../supabaseClient";

const FetchData = () => {
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("cas").select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Fetched data from 'cas' table:", data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Fetching Example</h1>
    </div>
  );
};

export default FetchData;
