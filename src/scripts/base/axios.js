import * as stringify from 'qs/lib/stringify';

export default class {
    constructor(prefix = '') {
        this.base_url = prefix;
        this.http = axios.create({
            baseURL: this.base_url,
            timeout: 20000,
            paramsSerializer(params) {
                return stringify(params, { arrayFormat: 'repeat' });
            },
        });
        this.http.interceptors.request.use((config) => {
            const token = SessionStore.get('token');
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            };
            if (token) config.headers.authorization = token;
            return config;
        });
        this.http.interceptors.response.use(
            (response) => {
                if (response.data.code === 200) {
                    return response.data;
                }
                if (!this.show_error) return Promise.reject(response.data);
                if (response.data.code) {
                    this.httpErrorHandle(response.data);
                    return Promise.reject(response.data);
                }
                if (response.data.message) {
                    return Promise.reject(response.data);
                }
            },
            (error) => {
                if (!this.show_error) return Promise.reject(error);
                return Promise.reject(error);
            }
        );
        for (const i of ['get', 'delete', 'post', 'put']) {
            this[i] = this.http[i];
        }
        this.canShowError();
    }

    httpErrorHandle(error) {
        switch (error.code) {
            case 401:
                break;
            default:
                break;
        }
        return Promise.reject(error);
    }

    canShowError() {
        this.show_error = true;
    }

    cantShowError() {
        this.show_error = false;
    }
}
