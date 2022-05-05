import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component
        location={location}
        navigate={navigate}
        params={params}
        {...props}
      />
    );
  };

  return Wrapper;
};

export default withRouter;
