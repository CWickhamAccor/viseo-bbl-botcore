const logger = require('../tools/logger');
const { callNlu } = require('../connectors/nluConnector');
const { callLms } = require('../connectors/lmsConnector');

async function botcoreService(req, res) {
    const { text } = req.body;
    logger.info(`[input] : ${text}`);

    const { intent, entities } = await callNlu(text);
    logger.info('[nluResult] :');
    logger.info(JSON.stringify({ intent, entities }, null, 2));

    const result = await callLms(intent, entities);
    logger.info('[lmsResult] :', result);

    res.json(result);
}

module.exports = {
    botcoreService,
};
