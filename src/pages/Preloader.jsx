import { ClipLoader } from 'react-spinners';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <ClipLoader size={60} color="#007bff" />
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;