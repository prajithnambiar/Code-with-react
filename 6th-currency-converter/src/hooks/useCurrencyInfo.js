import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    useEffect(()=> {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`).then((res)=> res.json())
        .then((data)=> setData(data[currency]))
    }, [currency, data])
   

    return data;
}

export default useCurrencyInfo;