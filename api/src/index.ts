import app from './server'
import config from './config'
import chalk from 'chalk'
import './database'

app.listen(config.PORT, () => {
	console.log(
		`Aplicacion corriendo en el puerto ${chalk.inverse.red(`${config.PORT}`)}`,
	)
})
