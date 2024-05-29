import { getMenuModel } from "../models/menu.model.js";

export const getMenu = async  (req,res)=>{
    let data = await  getMenuModel();
    res.status(200).json({
        'msg' : 'GET MENU DESDE EL CONTROLADOR',
        'data': data
    });
}

export const postMenu = (req,res) =>{
    res.json({
        msg : 'POST MENU DESDE EL CONTROLADOR'
    });
}

export default{
    getMenu, postMenu
}

