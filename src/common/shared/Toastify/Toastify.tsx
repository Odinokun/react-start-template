import { FC } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';

const Toastify: FC = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={3}
      transition={Zoom}
    />
  );
};

export default Toastify;
