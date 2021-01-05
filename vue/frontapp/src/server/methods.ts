import Api from './index'

export default {
    sendParams : (keyword:string) =>{
        const item = {text: keyword};
        console.log(Api())
        return Api().post('/', item);
    }
}