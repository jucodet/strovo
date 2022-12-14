import Fastify from 'fastify'
import config from './config'
import dbConnectorPlugin from './plugins/db-connector-plugin'
import routesPlugin from './plugins/routes-plugin'

const fastify = Fastify({
  logger: {
    level: config.logLevel,
    pino: {
      target: 'pino-pretty',
      translateTime: true,
      ignore: 'pid,hostname,reqId,responseTime,req,res',
      colorize: true
    },
  },
})

fastify.decorate('config', config)
fastify.log.debug(`config : ${JSON.stringify(config)}`)
fastify.register(dbConnectorPlugin)
fastify.register(routesPlugin)

const start = async () => {
  try {
    await fastify.listen(config.port)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

void start()