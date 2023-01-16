import { useState, useEffect } from "react";
import axios, { CancelTokenSource } from "axios";
import axiosApi from "./axiosApi";

const useAxiosGet = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const cancelToken: CancelTokenSource = axios.CancelToken.source();
        axiosApi.get(`${url}`, { cancelToken: cancelToken.token })
            .then(res => {
                setIsPending(false);
                setData(res.data);
                setError(null);
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    return;
                }
                setIsPending(false);
                setError(err.message);
            })
        return () => {
            cancelToken.cancel();
        }
    }, [url]);
    return { data, isPending, error }
}

export default useAxiosGet;
