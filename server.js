const express = require('express');
const app = express();
var cors = require('cors');
const paginateInfo = require('paginate-info');
const data = require('./public/products');

app.use(cors());

app.use(express.static('public'))

app.use('/fetch',function (req, res, next) {

    const { query: { currentPage, pageSize } } = req;
	const { limit, offset } = paginateInfo.calculateLimitAndOffset(currentPage, pageSize);
	const count = data.length;
	const paginatedData = data.slice(offset, offset + limit);
	const paginationInfo = paginateInfo.paginate(currentPage, count, paginatedData);

	return res.status(200).json({
		success: true,
		data : paginatedData
	    // data: { result: paginatedData, meta: paginationInfo }
	});
});

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});