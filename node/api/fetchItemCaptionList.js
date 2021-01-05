const axios = require("axios"); 
const _ = require("lodash")
const rakuten = require("../secret/rakuten"); 

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
        if(!itemCaption){ 
            return result;
        }
        result.push(itemCaption);
        return result;
    },[])

    return itemCaptionList;
}