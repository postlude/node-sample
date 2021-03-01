module.exports = {
    apps: [{
        name: 'node-sample',
        script: './app.js',
        watch: true,
        ignore_watch: ['.git', 'log', 'node_modules'],
        // env: {
        //     "NODE_ENV": "development",
        // },
        // env_production : {
        //     "NODE_ENV": "production"
        // },
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        out_file: './log/pm2_out.log',
        error_file: './log/pm2_err.log'
    }]
};
