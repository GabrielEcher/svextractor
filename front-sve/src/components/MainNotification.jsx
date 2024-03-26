import { ToastContainer } from 'react-toastify';

export const MainNotification = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={8000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition:Bounce
        ></ToastContainer>
    )
}