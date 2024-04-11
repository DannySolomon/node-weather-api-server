// Middleware to authenticate requests
const authenticate = (req, res, next) => {
  const { clientid, clientsecret } = req.headers;

  // Check if client id and secret are present
  if (!clientid || !clientsecret) {
    return res.status(401).json({
      error:
        "Authentication failed. Please provide client id and client secret.",
    });
  }
  // Check if client id and secret are valid
  // not check now because we have no client info database

  next();
};

module.exports = authenticate;
