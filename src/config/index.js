import dev from './environments/env.dev';

const config = {
    appName: 'firehose',
    env: dev,

    api: {
        domains: {
            shipment: `${dev.BASE_URL}/shipment`,
        }
    }
}
export default config;