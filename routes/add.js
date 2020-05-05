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
    const course = new Cource({
        title: req.body.title,
        price: req.body.price,
        img: req.body.img
    })

    try {
        await course.save()
        res.redirect('/courses')
    }catch (e) {
        console.log(e)
    }
})


module.exports = router