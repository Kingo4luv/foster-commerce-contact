// apollo.config.js
module.exports = {
    client: {
        service: {
            name: 'my-app',
            // URL to the GraphQL API
            url: 'https://happy-lager.fostercommerce.com/api',
        },
        // Files processed by the extension
        includes: [
            'src/**/*.vue',
            'src/**/*.js',
        ],
    },
}