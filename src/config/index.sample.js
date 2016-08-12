var config = {
    local: {
        mode: 'local',
        port: 3000,
        mongo: {
            dbname: 'dbname',
            user: 'user',
            password: 'password',
            host: 'hostname',
            port: 4000
        }
    }
}

module.exports = function(mode) {
    return config.local;
}