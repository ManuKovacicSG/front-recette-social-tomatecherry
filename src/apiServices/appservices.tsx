import axios from "axios";

const apiBase = 'http://localhost:4000/api/v1'

const appServices = {
    async getAllRecipes(){

        const res = await axios.get(apiBase + `/recipes`);
        return res.data;
    },

    async getRecipeById(_id:string){
        const res = await axios.get(apiBase + `/recipes/recipe/${_id}`);
        return res.data;
    },

    async deleteRecipeById(_id:string){
        try {
            const res = await axios.delete(apiBase + `/recipes/recipe/${_id}`);
            return res.data;
        } catch (err) {
            return console.log(err);
        }
    }
}

export default appServices;