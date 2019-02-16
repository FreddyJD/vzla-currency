const dolarTodayImport = require('./third_party/dolarToday');
const dolarCucutaImport = require('./third_party/dolarCucuta');
const dolarGovImport = require('./govermentScrapper'); 

module.exports = async function alldata() {
    const dolarToday = await dolarTodayImport(); 
    const dolarCucuta = await dolarCucutaImport(); 
    const dolarGov = await dolarGovImport(); 

    return ({
        "DolarToday": dolarToday.usd_value,
        "DolarCucuta": dolarCucuta.usd_value,
        "DolarDicom": dolarGov.usd_value
    })
}