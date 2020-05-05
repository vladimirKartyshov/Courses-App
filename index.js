const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const cardRoutes = require('./routes/card')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')


const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/card', cardRoutes)

const PORT = process.env.PORT || 3000


//оборачиваем в async для более удобной работы с promise
async function start() {
    try {
        const url = `mongodb+srv://vladimir:otAQZc9TDc2rKODI@cluster0-vbmej.mongodb.net/shop`
        await mongoose.connect(url, {useNewUrlParser:true})
        app.listen(PORT, () => {
            console.log('Server is running on port......')
        })
    }catch (e) {
        console.log(e)
    }
}
start()

