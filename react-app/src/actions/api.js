//In order to make http request we have to use "axios" package.

import axios from "axios";

const baseUrl = "http://localhost:10506/api/"

//in this "default" object, there can be different function for different controllers inside asp.netcore
export default {
    dCandidate(url = baseUrl + 'DCandidates/'){
        return {
            fetchAll : () => axios.get(url),
            fetchById : id => axios.get(url + id),
            create : newRecord => axios.post(url,newRecord),
            update : (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete : id => axios.delete(url + id)
        }
    }
}