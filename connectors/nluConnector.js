const { nlu } = require('../config/default');
const { callAxios } = require('./genericConnector');

async function callNlu(text){
    const { url, port, endpoint } = nlu;
    try {
        return callAxios({
            url,
            port,
            endpoint,
            method: 'post',
            data: {text}
        });
    } catch (err) {
        logger.error(err);
        return err;
    }
}

module.exports = {
    callNlu,
};
