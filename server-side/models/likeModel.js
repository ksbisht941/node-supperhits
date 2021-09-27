const mongoose = require('mongoose');

const likeSchema = mongoose.Schema(  {
    createdAt: {
      type: Date,
      default: Date.now
    },
    movie: {
      type: mongoose.Schema.ObjectId,
      ref: 'Movie',
      required: [true, 'Like must belong to a movie.']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Like must belong to a movie']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;