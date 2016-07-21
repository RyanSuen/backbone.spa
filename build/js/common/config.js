/**
 * Created by sun yi on 2016/7/20.
 */

var commonPagePath = '/backbone.spa/';

module.exports = {
    IMG_PATH: commonPagePath+'images/',
    PAGE_URL: {
        INIT_PATH: commonPagePath +'#inits',
        INIT_GENDER_PATH: commonPagePath+'#inits/gender',
        MAIN_PATH: commonPagePath
    },
    API_URL: {

    },
    RANDOM:'?random='+Math.random().toString().replace('.','')
};