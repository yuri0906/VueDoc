/*
検索キーワードにヒットした商品の説明文のリストを生成する
*/

const axios = require("axios"); 
const _ = require("lodash")
const rakuten = require("../secret/rakuten"); //楽天APIのIDとURL

exports.fetchItemCaptionList = async(keyword) => { 
    const result = await axios.get(rakuten.apiURL,{
        params:{ 
            "applicationId": rakuten.apiID, 
            "keyword": keyword 
        }
        }).catch((err) => {
            console.log(err.response.data);
            throw new Error("error occured in rakutenAPI");
    });

    const items = result.data["Items"]; 

    const itemCaptionList = _.reduce(items,(result,item)=>{
        let itemCaption = item.Item["itemCaption"]; 
        if(!itemCaption){ //空文判定
            return result;
        }
        result.push(itemCaption);
        return result;
    },[])

    return itemCaptionList;
}