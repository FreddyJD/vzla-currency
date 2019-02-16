

const fetch = require('node-fetch');

module.exports = async function DolarCucuta() { 
    const response = await fetch(`https://s3.amazonaws.com/frontcloud/data.json?${Date.now()}`); 
    const json = await response.json(); 

    const DolarCucuta = {
        usd_value: json.USDVEF.dolarcucuta, 
        usd_cucuta: json.USDVEF.dolarcucuta_efe, 
    }
    return DolarCucuta; 
}
