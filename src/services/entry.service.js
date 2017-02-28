import * as axios from "./axios.instance.js";
import q from 'q';
import constants from '../constants/constants.js';

export default class EntryService {
    constructor(){
        this.axios = axios.default.instance;
        this.entries = '';
    }

    getEntries(userId='56af7da8d4c6d6ab9227851e'){
        console.log('get entries');
        let dfd = q.defer();
        let self = this;
        if(this.entries){
            dfd.resolve(this.entries)
        } else {
            this.axios({
                method: 'GET',
                url: `${constants.base}/entry/all/${userId}`,
                cache: true
            }).then((response)=>{
                console.log('got entries');
                self.entries = response.data;
                dfd.resolve(self.entries);
            }).catch((err)=>{
                dfd.reject(err);
            })
        }
        return dfd.promise;
    }
}
