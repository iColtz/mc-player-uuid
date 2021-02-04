const fetch = require('node-fetch');

async function getUuid(username) {
    if (typeof username !== 'string') {
        throw new TypeError(`username needs to be a typeof string received ${typeof username}`);
    }

    const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
    const body = await res.json();

    return body;
}

module.exports = getUuid;