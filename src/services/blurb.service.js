import * as axios from "./axios.instance.js";
import q from 'q';
import constants from '../constants/constants.js';

export default class BlurbService {
    constructor(){
        this.axios = axios.default.instance;
        this.blurbs = '';
    }

    getBlurbs(userId='56af7da8d4c6d6ab9227851e'){
        console.log('get entries');
        let dfd = q.defer();
        let self = this;
        if(this.blurbs){
            dfd.resolve(this.blurbs)
        } else {
            this.axios({
                method: 'GET',
                url: `${constants.base}/blurb/${userId}`,
                cache: true
            }).then((response)=>{
                console.log('got blurbs');
                self.blurbs = response.data;
                dfd.resolve(self.blurbs);
            }).catch((err)=>{
                dfd.reject(err);
            })
        }
        return dfd.promise;
    }
}
