import mongoose from 'mongoose';

const proofSchema = new mongoose.Schema({
  type: {
    type: String,
    required : true,
    unique : true,
    trim: true,
  },
  content: {
    type : String,
    required : true
  },
});

export default mongoose.model('Proof', proofSchema);