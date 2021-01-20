import dotenv from 'dotenv'
dotenv.config()

const config = {
	PORT: process.env.PORT || 4444,
	USERNAME: process.env.USERNAME || 'Usuario Inexistente',
	PASSWORD: process.env.PASSWORD || ' contraseña inexistente',
	DBNAME: process.env.DBNAME || 'nombre de base de datos inexistente',
}

export default config
