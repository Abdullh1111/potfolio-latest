import dotenv from 'dotenv'
dotenv.config()
export default {
    port:process.env.PORT,
    db_url :process.env.DB_URL,
    potfolio_url :process.env.PORTFOLIO_URL,
    dasboard_url :process.env.DASHBOARD_URL,
    cloudinary_api_key :process.env.CLOUDINARY_API_KEY,
    cloudinary_cloud_name :process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_api_secret:process.env.CLOUDINARY_API_SECRET,
    jwt_secret_key: process.env.JWT_SECRET_KEY,
    smpt_port:process.env.SMPT_PORT,
    smpt_host:process.env.SMPT_HOST,
    smpt_mail:process.env.SMPT_MAIL,
    smpt_password:process.env.SMPT_PASSWORD,
    smpt_service:process.env.SMPT_SERVICE,
}