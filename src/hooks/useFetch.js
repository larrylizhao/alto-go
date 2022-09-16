import {useEffect, useState} from 'react';
import axios from 'axios';

export default (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetch = () => {
        setLoading(true);
        axios.get(url).then(res => {
            setData(res.data);
        }).catch(err => {
            setError(err);
        }) .finally(() => {
            setLoading(false);
        })
    }
    useEffect(fetch, [url]);

    return [loading, data, error, fetch];
}
