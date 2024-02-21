const chartController = {}

/*
GET /api/charts
Auth: yes
Access: private
*/
chartController.getCharts = async (req, res) => {
    res.json({controller: "getCharts"})
}

/*
GET /api/admin/entries
Auth: admin
Access: NA
*/
chartController.getEntries = async (req, res) => {
    res.json({controller: "getEntries"})
}

module.exports = chartController