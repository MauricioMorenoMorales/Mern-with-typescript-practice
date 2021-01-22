const express = require('express')
import morgan from 'morgan'

//inicializaciones
const app = express()

//modulos locales
import videoRoutes from './routes/videos.routes'

//configuracion
app.set('port', process.env.PORT || 4444)

//middlewares
app.use(morgan('dev'))
app.use(express.url)

app.use('/videos', videoRoutes)

export default app
