
export default function errorHandler (error, req, res) {
  res.status(500).json({ error: error.message })
};
