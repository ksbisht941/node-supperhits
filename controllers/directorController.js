exports.getAllDirector = (req, res) => {
  res.status(200).json({
    code: "0",
    status: "success",
    message: "Fetch directors list successfully",
  });
};
