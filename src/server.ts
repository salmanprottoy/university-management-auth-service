import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './share/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database is connected successfully to MongoDB')

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('failed to connect to MongoDB', err)
  }
}

bootstrap()
