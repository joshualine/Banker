const {
  createTransfer,
  getTransferById,
  getTransfers,
  reverseTransfer,
} = require('../controllers/transfer.controller');

const router = require("express").Router();
const { protected, admin } = require('../middlewares/auth.middleware');

//Add Transfer   //Get all transfers done by the user
router.route('/')
  .post(protected, createTransfer)
  .get(getTransfers);

//Get A Specified Transfer
router.route('/:id')
  .get(getTransferById);

//Reverse transfer
router.route('/:id')
  .delete(protected, admin, reverseTransfer)



module.exports = router;