// Middleware to authenticate requests
const authenticate = (req, res, next) => {
  const { clientId, clientSecret } = req.headers;
  // Check if client id and secret are present
  if (!clientId || !clientSecret) {
    return res.status(401).json({
      error:
        "Authentication failed. Please provide client id and client secret.",
    });
  }
  // Check if client id and secret are valid
  next();
};

module.exports = authenticate;
