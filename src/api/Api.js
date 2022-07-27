//MAIN ADDRESS
const API_ROOT = 'http://localhost:8080'
const API_PREFIX = '/api'

//URL Excel
export const BASE_Excel = API_ROOT + API_PREFIX + '/download'
export const URL_downloadFull = BASE_Excel + '/full' //POST
export const URL_downloadBase = BASE_Excel + '/war-camp' //POST { id }
export const URL_downloadObj = BASE_Excel + '/object-informatization' //POST { id }

//URL WarCamp
export const BASE_WarCamp = API_ROOT + API_PREFIX + '/war-camp'
export const URL_getDataWarCamp = BASE_WarCamp + '/all' //GET
export const URL_updateWarCamp = BASE_WarCamp + '/update' //POST
/*
    const data = {
        id,
        nameWarCamp,
        numberWarCamp,
        location
    }
*/
export const URL_createWarCamp = BASE_WarCamp + '/create' //POST
/*
    const data = {
        nameWarCamp,
        numberWarCamp,
        location
    }
 */
export const URL_getDataWarCampById = BASE_WarCamp + '/by-id' //POST { id }
export const URL_deleteWarCampById = BASE_WarCamp + '/delete' //POST { id }

//URL OI
export const BASE_OI = API_ROOT + API_PREFIX + '/informatization-object'
export const URL_getDataOI = BASE_OI + '/by-war-camp' //POST { id !!!military base id!!! }
export const URL_getDataOIById = BASE_OI + '/by-id' // POST const data = { id : oiId }
export const URL_createOI = BASE_OI + '/create' //POST { id !!!military base id!!!, nameOI }
export const URL_updateOI = BASE_OI + '/update' //POST const data = {id, nameOI}
export const URL_deleteOI = BASE_OI + '/delete' //POST { id }

//URL Certificate
export const BASE_Cert = API_ROOT + API_PREFIX + '/certificate'
export const URL_createCert = BASE_Cert + '/create' //check backend layer //POST
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
export const URL_removeCert = BASE_Cert + '/delete' //POST { id //!!!object_inf ID!!! }

//URL SpecialInvestigation
export const BASE_SI = API_ROOT + API_PREFIX + '/spec-investigation'
export const URL_createSI = BASE_SI + '/create' //check backend layer //POST
/*
    const data = {
        id // !!!object_inf ID!!!,
        numberDoc,
        dateCheck
    }
 */
export const URL_removeSI = BASE_SI + '/delete' //POST { id //!!!object_inf ID!!! }

//URL SpecialCheckResult
export const BASE_SCR = API_ROOT + API_PREFIX + '/spec-check'
export const URL_createSCR = BASE_SCR + '/create' //check backend layer //POST
/*
    const data = {
        id // !!!object_inf ID!!!,
        numberDoc,
        dateCheck
    }
 */
export const URL_removeSCR = BASE_SCR + '/delete' //POST { id //!!!object_inf ID!!! }

//URL Component
export const BASE_Component = API_ROOT + API_PREFIX + '/component'
export const URL_getDataComponentById = BASE_Component + '/by-inform-object' //POST { id //!!!object_inf ID!!! }
export const URL_createComponent = BASE_Component + '/create' //POST
/*
    const data = {
        id // !!!object_inf ID!!!,
        nameDocument,
        series
    }
 */
export const URL_removeComponent = BASE_Component + '/delete' //POST { id }

//URL Document
export const BASE_Document = API_ROOT + API_PREFIX + '/inner-document'
export const URL_getDataDocumentById = BASE_Document + '/by-inform-object' //POST { id //!!!object_inf ID!!! }
export const URL_createDocument = BASE_Document + '/create' //POST
/*
    const data = {
        id // !!!object_inf ID!!!,
        nameDocument,
        regNum,
        date
    }
 */
export const URL_removeDocument = BASE_Document + '/delete'  //POST { id }
