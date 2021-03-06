const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const BalanceSchema = mongoose.Schema({
  amountBalance: { type: Number, required: true, default: 0.0 },
  deposit: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Deposit',
  },
})

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    othername: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"]
    },
    dob: {
      type: Date,
      required: true,
      default: Date.now,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    isActive: { 
      type: Boolean,
      required: true,
      default: true
    },
    balance: {
      type: Number,
      required: true,
      default: 0.0,
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})


module.exports = mongoose.model("User", UserSchema);