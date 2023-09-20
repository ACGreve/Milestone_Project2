const router = require('express').Router()
const Actor = require('../models/actor')
const actorSeedData = require('../models/actorSeedData')
const { actorSeed } = require('../models/actorSeedData')

//Seed data
router.get('/data/seed', async(req, res) =>{
    // await Promise.all([Actor.deleteMany()])
    // const actors = await Actor.insertMany(actorSeedData)
    // const actorIds = actors.map(actor => actor._id)
    // res.redirect('/actors')
    try{
        await actorSeed()
        res.json({ message: 'complete' })
    }catch(error){
        console.log('error', error)
        res.status(500).json({ message: 'error saving actors' })
    }
})

//home route for all actors
router.get('/', async(req, res) =>{
    const actors = await Actor.find()
    res.json(actors)
})

//get specific actor
router.get('/:id', async (req, res) =>{
    const { id } = req.params
    const actor = await Actor.findById(id)
    res.render(actor)
})



module.exports = router