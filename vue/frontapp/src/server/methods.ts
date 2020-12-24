import Api from './index'

export default {
    sendParams : (keyword:string) =>{
        const item = {text: keyword};
        return Api().post('/', item);
    }
}