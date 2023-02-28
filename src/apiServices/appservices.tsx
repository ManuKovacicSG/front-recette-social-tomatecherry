import axios from "axios";

const apiBase = 'http://localhost:4000/api/v1'

const appServices = {
    getAllRecipes(){
        return axios.get(apiBase + `/recipes`).then((res) => res.data())
    },

    getRecipeById(_id:string){
        return axios.get(apiBase + `/recipes/${_id}`).then((res)=> (res.data));
    },

    deleteRecipeById(id:string){
        return axios.delete(apiBase + `/recipes/${id}`).then((res)=>res.data)
        .catch((err)=> console.log(err));
    }
}

export default appServices;