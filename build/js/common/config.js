/**
 * Created by sun yi on 2016/7/20.
 */

var commonPagePath = '/backbone.spa/';

module.exports = {
    IMG_PATH: commonPagePath + 'images/',
    PAGE_URL: {
        INIT_PATH: commonPagePath + '#init',
        INIT_GENDER_PATH: commonPagePath + '#init/gender',
        MAIN_PATH: commonPagePath + '#main',
        MAIN_RECORD_PATH: commonPagePath + '#record',
        FIND_PATH: commonPagePath + '#find',
        MINE_PATH:commonPagePath + '#mine',
        COLLECT_PATH: commonPagePath + '#collect',
        SUGGESTION_PATH: commonPagePath + '#suggestion',
        SET_PATH: commonPagePath + '#set',
        PROVISION_PATH: commonPagePath + '#provision',
        ABOUT_US_PATH: commonPagePath + '#aboutUs'
    },
    API_URL: {
        MAINJSON_PATH: commonPagePath + '/data/main.json', //首页列表数据接口
        BABYDETAIL_PATH: commonPagePath + '/data/babyDetail.json' //文章详情页数据接口
    },
    DATE: '?date=2016072101'// +Math.random().toString().replace('.', '')
};