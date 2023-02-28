import axios from 'axios';

const api = 'https://localhost:4000';

const recipes = {
    getAllRecipes(){
        return axios.get(api)
        .then((response) => (response.data))
    }
}

export default axios;
// export default axios.create({
//     baseURL: 'https://localhost:4000'
// })