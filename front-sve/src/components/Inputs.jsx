import { BuscarDados, GerarRelatorio, CleanButton } from './Botoes'
import { EscolherVend } from './EscolherVend'
import { EscolherCliente } from './EscolherCliente'
import { EscolherTele } from './EscolherTele'
import { EscolherData } from './EscolherData'
import { EscolherTop } from './EscolherTop'
import { EscolherMarca } from './EscolherMarca'
import { EscolherProd } from './EscolherProd'
import { EscolherStatus } from './EscolherStatus';
import { EscolherCidade } from './EscolherCidade';
import { EscolherFab } from './EscolherFabricante';
import { useFetchApi } from './FetchApi';
import { useExportToXls } from './ExportData'


export const FirstLineInputs = () => {
    return (
        <>
            <EscolherCliente />
            <EscolherProd />
            <EscolherFab />
            <EscolherMarca />
            <EscolherVend />
            <EscolherTele />
        </>

    )
}

export const SecondLineInputs = () => {
    const fetchData = useFetchApi();
    const exportData = useExportToXls();
    
    return (
        <>
            <EscolherCidade />
            <EscolherTop />
            <EscolherStatus />
            <EscolherData />
            <BuscarDados onClick={fetchData} />
            <GerarRelatorio onClick={exportData} />
            <CleanButton />
        </>
    )
}