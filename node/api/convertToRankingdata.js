
const _ = require("lodash"); 
const { extractKeyphrasesFromSentence } = require("./extractKeyphrasesFromSentence");
const { fetchItemCaptionList } = require("./fetchItemCaptionList");

exports.convertToRankingdata = async(searchWord) => {
    const itemCaptionList = await fetchItemCaptionList(searchWord);

    const keyphraseList = await Promise.all(_.map(itemCaptionList, async(itemCaption)=>{
        let keyphrases = await extractKeyphrasesFromSentence(itemCaption);
        return keyphrases;
    }))

    const scoreList = _.chain(keyphraseList)
        .map(_.toPairs)
        .flatten()
        .groupBy(_.head)
        .toPairs()
        .map((it) => [{word:it[0], score:_.sumBy(it[1], _.last)}])
        .flatten()
        .value();

    return _.sortBy(scoreList,"score").reverse(); 
}


