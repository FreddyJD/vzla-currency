const fetch = require('node-fetch');

module.exports = async function dolarToday() { 
    const response = await fetch('https://s3.amazonaws.com/dolartoday/data.json'); 
    const json = await response.json(); 

    const DolarToday = {
        usd_value: json.USD.transferencia, 
        usd_cucuta: json.USD.transfer_cucuta, 
        usd_dolarToday: json.USD.dolartoday
    }
    return DolarToday; 
}

