import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3500);
  }, [navigate]);

  return (
    <div>
      We are sorry. This page does not exist. You will be automatically
      redirected to Home page.
    </div>
  );
};

export default NotFoundPage;
