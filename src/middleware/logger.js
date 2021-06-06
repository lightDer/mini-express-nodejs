import winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: './log/error.log', level: 'error' }),
    new winston.transports.File({ filename: './log/info.log' })
  ]
})

function LogHandler (req, res, next) {
  const {
    ip,
    originalUrl,
    method,
    body
  } = req
  const userAgent = req.headers['user-agent']
  const info = {
    ip,
    originalUrl,
    method,
    body,
    userAgent,
    time: new Date().toISOString()
  }

  logger.info(info)
  next()
}

export { logger }
export default LogHandler
