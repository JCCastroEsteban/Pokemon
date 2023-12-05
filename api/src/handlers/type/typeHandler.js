const {getTypesApi } = require ('../../controllers/type/typeController')
const {type} = require('../../db')

const getTypeHandler= async (req, res)=>{
try {
    const typeExist = await type.findAll()
    if (!typeExist.length) {
        const types= await getTypesApi()
        await type.bulkCreate(types)
    }
    const allTypes = await type.findAll()
    res.status(200).json(allTypes)
} catch (error) {
    res.status(400).send({error: error.message})
}
}
module.exports = { getTypeHandler }