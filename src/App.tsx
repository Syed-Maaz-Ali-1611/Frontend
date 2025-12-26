import { useEffect } from "react";
import api from "./config/axios.config";

const App = () => {

  useEffect(() => {
    const testBackend = async () => {
      try {
        const res = await api.get("/");
        console.log("Backend response:", res.data);
      } catch (error: any) {
        console.error(
          "Backend not working:",
          error.response?.data || error.message
        );
      }
    };

    testBackend();
  }, []);

  return (
    <div>
      <h1>Vite + React</h1>
      <p>Check console for backend status</p>
    </div>
  );
};

export default App;
