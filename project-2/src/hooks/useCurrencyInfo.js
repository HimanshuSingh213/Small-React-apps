import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect( () => {
        async function fetchData() {
            
            try {
                const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                const finalData = await res.json();
                
                setData(finalData[currency.toLowerCase()]);
                console.log(data);
                
            } catch (err) {
                console.error("Error fetching currencyInfo", err);
                alert("Something went wrong while fetching data.");
                return 0;
            }

        }
        fetchData();
    }, [currency])

    return data
}

export default useCurrencyInfo;