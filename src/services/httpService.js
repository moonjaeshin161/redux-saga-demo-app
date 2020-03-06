import { CONST } from "../const";

export const httpService = {

    post: async (url, data) => {
        const options = {
            method: 'post',
            headers: {
                Accept: 'Application/json'
            },
            body: JSON.stringify(data)
        }
        return fetch(url, options).then(res => res.json());
    },

    get: async (url) => {
        const options = {
            method: 'get',
            headers: {
                Accept: 'Application/json'
            },
        }
        return fetch(url, options).then(res => res.json());
    },

    postWithToken: async (url, data) => {
        const token = CONST.TOKEN;
        const options = {
            method: 'post',
            headers: {
                Accept: 'Application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(data)
        }
        return fetch(url, options).then(res => res.json());
    },

    getWithToken: async (url) => {
        const token = CONST.TOKEN;
        const options = {
            method: 'get',
            Accept: 'Application/json',
            Authorization: 'Bearer ' + token
        }
        return fetch(url, options).then(res => res.json());
    }

}