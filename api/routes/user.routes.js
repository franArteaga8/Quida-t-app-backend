const router = require('express').Router()

const { getAllUsers, getOneUser, updateUser, updateUserPsycho, deleteUser, psychoStatusRole } = require('../controllers/user.controller')
const { checkPsycho, checkAdmin } = require('../middlewares/checkAuth.middleware')

router.get('/', checkPsycho, getAllUsers)
router.get('/:userId', checkPsycho,  getOneUser)

router.put('/', updateUser)
router.put('/:userId', checkPsycho, updateUserPsycho)
router.put('/:userId', checkAdmin, psychoStatusRole)

router.delete('/', deleteUser)

module.exports = router