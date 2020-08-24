const {get} = require('lodash');

let config;

exports.loadConfig = () => {
    if (!config) {
        cy.request('https://run.mocky.io/v3/7f4ff1f3-4cd7-4c26-b79d-a99f5502d2fe').then((data) => {
                cy.log(`config loaded: ${JSON.stringify(data.body)}`);
                config = data.body;
            }
        );
    }
    return config;
}

exports.getValue = (key) => {
    return get(config, key);
}