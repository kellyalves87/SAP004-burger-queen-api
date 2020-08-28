import express from 'express'
import bodyParser from 'body-parser'
import ProductRoutes from '../api/server/routes/ProductRoutes';
import OrderRoutes from '../api/server/routes/OrderRoutes';

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);

app.get('*', (req, res) => res.status(200).send({
   message: 'Bem vindos a API do Burger Queen!'
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app
