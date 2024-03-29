const User = require('../models/userModel');

const handleLogout = async (request, response) => {
  try {
    const cookies = request.cookies;
    if(!cookies?.refreshToken) return response.status(204).json({ message: 'Cookies not present' })
    const refreshToken = cookies.refreshToken;

    const user = await User.findOne({ refreshToken })
    if(!user) {
      response.clearCookie('refreshToken', { httpOnly: true, sameSite: 'None', secure: true })
      return response.status(200).json({ message: 'Cookies cleared' })
    }

    // Borrar el refreshToken del usuario en la DB
    user.refreshToken = '';
    await user.save();

    response.clearCookie('refreshToken', { httpOnly: true, sameSite: 'None', secure: true })
    response.status(200).json({ message: 'User and cookies cleared' })
  } catch (error) {
    response.status(500).json(error)
  }
}

module.exports = { handleLogout };