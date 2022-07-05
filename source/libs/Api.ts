import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { configs } from "./configs/api";

const instance = axios.create(configs.axiosConfig);

function Api(conf: AxiosRequestConfig): Promise<AxiosResponse> {
    return new Promise(async (resolve, reject) => {
        instance(conf)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export default Api;
