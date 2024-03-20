import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";
import CleanupLocalStorageOnUnload from "./services/inactivityReloader";
import { ConfigProvider } from 'antd';
import pt_BR from 'antd/locale/pt_BR'

import { StrictMode } from 'react';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <StrictMode>
      <ConfigProvider locale={pt_BR}>
        <DataProvider>
                <AuthProvider>
                    <CleanupLocalStorageOnUnload />
                    <AppRouter />
                </AuthProvider>
        </DataProvider>
      </ConfigProvider>
    </StrictMode>
  )
}

export default App;