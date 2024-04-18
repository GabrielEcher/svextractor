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
        selectedCid,
        fabricante,
        divisao, } = useContext(DataContext);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await api_db.get(
                `/vendas/${selectedVendedor}/${selectedTelevendas}/${codigoCliente}/${startDate}/${endDate}/${selectedTop}/${codigoProd}/${selectedMarca}/${selectedStatus}/${selectedCid}/${fabricante}/${divisao}`,
            );
            
            setData(response.data);

            toast.success('Vendas obtidas com sucesso!');
            
            setLoading(false);
        } catch (error) {
            if (error.request.status === 404) {
                toast.error('ERRO:404 Erro ao consultar dados, verifique os campos preenchidos! **Os campos de data devem ser preenchidos**');
            } else if (error.request.status === 0) {
                toast.error('ERRO:500/0. Problema ao comunicar-se com a API, acione o suporte!');
            } else if (error.request.status === 401) {
                toast.error('ERRO: 401. Sua sessão expirou, faça login novamente!')
            } else if (error.request.status === 500) {
                toast.error('ERRO: 401. Sua sessão expirou, faça login novamente!')
            }
            setLoading(false);
        }
    };

    return fetchData;
}
