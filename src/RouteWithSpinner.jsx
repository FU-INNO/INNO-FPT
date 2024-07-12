import { useEffect } from "react";
import { useNavigate } from "react-router";
import Spinner from "./components/Spinner.jsx";

function RouteWithSpinner({ path, element }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(path);
    }, 500);

    return () => clearTimeout(timer);
  }, [navigate, path]);

  return <Spinner />;
}

export default RouteWithSpinner;
