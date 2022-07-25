//MAIN ADDRESS
const API_ROOT = 'http://localhost:8080'
const API_PREFIX = ''

//URL WarCamp
export const BASE_WarCamp = API_ROOT + API_PREFIX + ''
export const URL_getDataWarCamp = BASE_WarCamp + '' //GET
export const URL_updateWarCamp = BASE_WarCamp + '' //POST
/*
    const data = {
        id,
        nameWarCamp,
        numberWarCamp,
        location
    }
*/
export const URL_createWarCamp = BASE_WarCamp + '' //POST
/*
    const data = {
        nameWarCamp,
        numberWarCamp,
        location
    }
 */
export const URL_getDataWarCampById = BASE_WarCamp + '' //POST { id }
export const URL_deleteWarCampById = BASE_WarCamp + '' //POST { id }

//URL OI
export const BASE_OI = API_ROOT + API_PREFIX + ''
export const URL_getDataOI = BASE_OI + '' //GET
export const URL_getDataOIById = BASE_OI + '' // POST const data = { id : oiId }

export const URL_createOI = BASE_OI + '' //POST { nameOI }
export const URL_updateOI = BASE_OI + '' //POST const data = {id, nameOI}
export const URL_deleteOI = BASE_OI + '' //POST { id }

export const URL_createCert = BASE_OI + '' //check backend layer //POST
/*
    const date = {
        id, // !!!object_inf ID!!!
        numberCert,
        owner,
        category,
        dateCreateCert,
        dateFinishCert
    }
 */
export const URL_removeCert = BASE_OI + '' //POST { id //!!!object_inf ID!!! }

export const URL_createSI = BASE_OI + '' //check backend layer //POST
/*
    const data = {
        id // !!!object_inf ID!!!,
        numberDoc,
        dateCheck
    }
 */
export const URL_removeSI = BASE_OI + '' //POST { id //!!!object_inf ID!!! }

export const URL_createSCR = BASE_OI + '' //check backend layer //POST
/*
    const data = {
        id // !!!object_inf ID!!!,
        numberDoc,
        dateCheck
    }
 */
export const URL_removeSCR = BASE_OI + '' //POST { id //!!!object_inf ID!!! }

export const URL_createComponent = BASE_OI + '' //POST
/*
    const data = {
        id // !!!object_inf ID!!!,
        nameDocument,
        series
    }
 */
export const URL_removeComponent = BASE_OI + '' //POST { id }

export const URL_createDocument = BASE_OI + '' //POST
/*
    const data = {
        id // !!!object_inf ID!!!,
        nameDocument,
        regNum,
        date
    }
 */
export const URL_removeDocument = BASE_OI + ''  //POST { id }

export const URL_getDataComponentById = BASE_OI + '' //POST { id //!!!object_inf ID!!! }
export const URL_getDataDocumentById = BASE_OI + '' //POST { id //!!!object_inf ID!!! }

