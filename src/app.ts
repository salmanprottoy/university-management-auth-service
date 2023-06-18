import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application router
app.use('/api/v1/users/', UserRoutes)

app.use(globalErrorHandler)

//routes
app.get('/', (req: Request, res: Response) => {
  res.send('Working successfully!')
})

export default app
