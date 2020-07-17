import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../.env') })

export const SERVER_BASE_URL = process.env.SERVER_BASE_URL || 'http://localhost:3000'
