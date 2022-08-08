import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './footer.css';

export default function Footer() {
    const [currencies, setCurrencies] = useState([]);

    const BaseURL = 'https://api.terawork.com/resources'

    //get list of currencies
    useEffect(() => {
        axios.get(BaseURL)
            .then((response) => {
                //console.log(response.data.data.currencies);
                setCurrencies(response.data.data.currencies);
            })
    }, []);

    return (
        <div className='footer-container'>
            <div className="footer">
                <div className="copyright">
                    © 2022 DevHire
                </div>
                <form className="currencyForm">
                    <div className="currencyDropdown">
                        <select>
                            {currencies.map(currency => (
                                <option key={currency.id}>
                                    {/* <div className="flag">
                                    {currency.symbol}
                                </div> */}
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}
