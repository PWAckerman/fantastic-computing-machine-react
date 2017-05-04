import * as axios from "./axios.instance.js";
import q from 'q';
import constants from '../constants/constants.js';

class UserService {

    constructor(){
        this.axios = axios.default.instance;
        this.user = '';
    }

    getUser(userId='56af7da8d4c6d6ab9227851e'){
        let dfd = q.defer();
        if(this.user){
            dfd.resolve(this.user)
        } else {
            this.axios({
                method: 'GET',
                url: `${constants.base}/user/${userId}`,
                cache: true
            }).then((user)=>{
                console.log(user);
                user.data.education = user.data.education.map(function(edu){
                  edu.description = edu.description.split("\n").filter(function(line){
                    return line
                  })
                  return edu
                })
                this.user = user.data;
                dfd.resolve(this.user)
            }).catch((err)=>{
                dfd.reject(err);
            });
        }
        return dfd.promise;
    }

    sendEmail(mailForm){
        let dfd = q.defer();
        this.axios({
            method: 'POST',
            url: `${constants.base}/sendmail/${this.user._id}`,
            cache: true,
            data: mailForm
        }).then((res)=>{
            dfd.resolve(res.data);
        }).catch((err)=>{
            dfd.reject(err);
        })
        return dfd.promise;
    }

    sendText(textForm){
        let dfd = q.defer();
        this.axios({
            method: 'POST',
            url: `${constants.base}/sendtext/${this.user._id}`,
            data: textForm
        }).then((res)=>{
            dfd.resolve(res.data);
        }).catch((err)=>{
            dfd.reject(err);
        })
        return dfd.promise;
    }
}

export default UserService;
