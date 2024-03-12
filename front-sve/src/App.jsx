import 'rsuite/dist/rsuite.min.css';
import '../src/styles/style.css'
import 'rsuite/Dropdown/styles/index.css';
import 'rsuite/Notification/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'rsuite/Table/styles/index.css';
import 'rsuite/SelectPicker/styles/index.css';
import 'rsuite/Tooltip/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/DatePicker/styles/index.css';
import 'rsuite/Table/styles/index.css';
import { AppRouter } from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";
import CleanupLocalStorageOnUnload from "./services/inactivityReloader";
import { CustomProvider } from 'rsuite';
import { ptBR } from "rsuite/locales/"
import { StrictMode } from 'react';

function App() {
  return (
    <StrictMode>
        <CustomProvider locale={ptBR} >
            <AuthProvider>
                <CleanupLocalStorageOnUnload />
                <AppRouter />
            </AuthProvider>
        </CustomProvider>
    </StrictMode>
  )
}

export default App;