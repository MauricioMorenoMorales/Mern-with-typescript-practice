import express, { urlencoded } from 'express'
import morgan from 'morgan'
import cors from 'cors'

//inicializaciones
const app = express()

//modulos locales
import videoRoutes from './routes/videos.routes'

//configuracion
app.set('port', process.env.PORT || 4444)

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: false }))

app.use('/videos', videoRoutes)

export default app
