import dev from './environments/env.dev';

const config = {
    appName: 'firehose',
    env: dev,

    api: {
        domains: {
            checkIn: `${dev.BASE_URL}/checkin`,
        }
    }
}
export default config;