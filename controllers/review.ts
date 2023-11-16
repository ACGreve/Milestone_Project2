const reviews = require('express').Router()
const Review = require('../models/review')
const reviewSeedData = require('../models/reviewSeedData')




reviews.get('/data/seed', async(req: any,res: any)=>{
  await Promise.all([Review.deleteMany()])
  const reviews = await Review.insertMany(reviewSeedData)
  res.redirect('/reviews')
})


//Home route for all comments
reviews.get('/', async (req: any, res: any)=>{
const reviews = await Review.find()
res.render('reviewBlog', {reviews})
})

reviews.get('/new', async(req: any, res: any)=>{
  res.render('newReview')
})

reviews.post('/', async (req: any, res: any)=>{
  await Review.create(req.body)
  res.status(303).redirect('/reviews')
})

reviews.get('/:id', async (req: any, res:any)=>{
  const {id} = req.params
  const review = await Review.findById(id)
  res.render('reviewShow', {review})
})

reviews.get('/:id/edit', async (req: any, res: any)=>{
  const {id}= req.params
  const review = await Review.findById(id)
  res.render('reviewEdit', {review})
})

reviews.delete('/:id', async (req: any, res: any)=>{
  const {id} = req.params
  await Review.findByIdAndDelete(id)
  res.redirect('/reviews')
})

reviews.put('/:id', async (req: any, res: any)=>{
  const {id} = req.params
  await Review.findByIdAndUpdate(id, req.body)
  res.status(303).redirect(`/reviews/${id}`)
})

module.exports = reviews