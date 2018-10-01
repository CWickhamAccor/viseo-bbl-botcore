const { lms } = require('../config/default');
const { callAxios } = require('./genericConnector');

async function callLms(intent, entities){
    const { url, port, endpoint } = lms;
    try {
        return callAxios({
            url,
            port,
            endpoint,
            method: 'post',
            data: { intent, entities }
        });
    } catch (err) {
        logger.error(err);
        return err;
    }
}

module.exports = {
    callLms,
};
