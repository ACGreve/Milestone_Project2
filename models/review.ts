const reviewSchema: any = new mongoose.Schema({
title:String,
name: String,
comment: String,
dateMade: String

})

module.exports = mongoose.model('Review', reviewSchema)