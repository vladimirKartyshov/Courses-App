const {Router} = require('express')
const Cource = require('../models/course')
const router = Router()



router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить новый курс',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const course = new Cource(req.body.title, req.body.price, req.body.img)

    await course.save()

    res.redirect('/courses')
})


module.exports = router