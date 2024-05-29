import { sequelize } from "../services/pg_sequelize.js"

export const getMenuModel = async () =>{
    //console.log("consola de modelo get");
    const data = await sequelize.query(" SELECT * FROM BEBIDA ");
    return data[0]
}
