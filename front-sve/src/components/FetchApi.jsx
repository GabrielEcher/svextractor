// useFetchApi.js
import { useContext } from 'react';
import { api_db } from '../services/api';
import { DataContext } from '../context/DataContext';
import { toast } from 'react-toastify';

export function useFetchApi() {
    const { setData, setLoading, selectedVendedor,
        selectedTelevendas,
        codigoCliente,
        startDate,
        endDate,
        selectedTop,
        codigoProd,
        selectedMarca,
        selectedStatus,
        selectedCid } = useContext(DataContext);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await api_db.get(
                `/vendas/${selectedVendedor}/${selectedTelevendas}/${codigoCliente}/${startDate}/${endDate}/${selectedTop}/${codigoProd}/${selectedMarca}/${selectedStatus}/${selectedCid}`
            );
            setData(response.data);

            toast.success('Vendas obtidas com sucesso!');
            toast.info('Ao exportar o relatório o download iniciará automaticamente.');
            setLoading(false);
        } catch (error) {
            if (error.request.status === 404) {
                toast.error('ERRO:404 Erro ao consultar dados, verifique os campos preenchidos!');
            } else if (error.request.status === 0) {
                toast.error('ERRO:500/0. Problema ao comunicar-se com a API, acione o suporte!');
            }
            setLoading(false);
        }
    };

    return fetchData;
}
