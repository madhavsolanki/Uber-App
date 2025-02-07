const express = require('express')
const captainController = require('../controllers/captain.controller');

const router = express.Router();

const { body } = require('express-validator');

router.post('/register', [
  body('email').isEmail().withMessage('Invalid email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('vehicle.color').isLength({min: 3}).withMessage('Vehicle color must be at least 3 characters'),
  body('vehicle.plate').isLength({min: 3}).withMessage('Plat must be contain at least 3 characters'),
  body('vehicle.capacity').isLength({min: 1}).withMessage('Capacity must be atleast 1'),
  body('vehicle.vehicleType').isIn(["car", "motorcycle", "auto"]).withMessage('Invalid vehicle type'),
],
  captainController.registerCaptain  
)


module.exports = router;