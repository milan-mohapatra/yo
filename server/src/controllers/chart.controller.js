const chartController = {}

/*
GET /api/charts
Auth: user
Access: private
*/
groupController.getCharts = async (req, res) => {
    res.json({controller: "getCharts"})
}

module.exports = chartController