import {useEffect} from 'react';

export default (value) => {
    useEffect(() => {
        console.log(value)
    }, [value]);
}
