const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

/*
Admins are the ones that can Create, Read, Update and Delete accounts of users
Authenticated Users cans View and Update their profiles
*/


// @description     Register a new user
// @route           POST /api/users
// @access          Admin
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, othername, email, gender, dob, phone,  isActive, isAdmin, password, balance } = req.body
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  const user = await User.create({
    firstname,
    lastname,
    othername,
    email,
    gender,
    dob, 
    phone,
    balance, 
    isActive, 
    isAdmin, 
    password
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      othername: user.othername,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      dob: user.dob,
      balance: user.balance,
      isAdmin: user.isAdmin,
      isActive: user.isActive,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-password')
  res.json(users)
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.firstname = req.body.firstname || user.firstname
    user.lastname = req.body.lastname || user.lastname
    user.othername = req.body.othername || user.othername
    user.dob = req.body.dob || user.dob
    user.balance = req.body.balance || user.balance
    user.gender = req.body.gender || user.gender
    user.phone = req.body.phone || user.phone
    user.isActive = req.body.isActive || user.isActive
    user.isAdmin = req.body.isAdmin || user.isAdmin
    user.email = req.body.email || user.email

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      firstname: updatedUser.firstname,
      lastname: updatedUser.lastname,
      othername: updatedUser.othername,
      email: updatedUser.email,
      phone: updatedUser.phone,
      balance: updatedUser.balance,
      isActive: updatedUser.isActive,
      gender: updatedUser.gender,
      dob: updatedUser.dob,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      othername: user.othername,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      balance: user.balance,
      dob: user.dob,
      isAdmin: user.isAdmin,
      isActive: user.isActive,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Authenticated user
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      othername: user.othername,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      dob: user.dob,
      balance: user.balance,
      isAdmin: user.isAdmin,
      isActive: user.isActive,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Authenticated user
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.othername = req.body.othername || user.othername
    user.dob = req.body.dob || user.dob
    user.gender = req.body.gender || user.gender

    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      othername: updatedUser.othername,
      gender: updatedUser.gender,
      dob: updatedUser.dob,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


module.exports = {
  getUsers,
  registerUser,
  getUserById,
  updateUser,
  deleteUser,

  authUser,
  getUserProfile,
  updateUserProfile
}