const express = require("express");
const server = express();

server.use(express.json());

let customers = [
	{ id: 1, name: "Youtube", site: "http://www.youtube.com" },
	{ id: 2, name: "Google", site: "http://www.google.com" },
	{ id: 3, name: "UOL", site: "http://www.uol.com" },
];

server.get("/customers", (req, res) => {
	return res.json(customers);
});

server.get("/customers/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const customer = customers.find((item) => item.id === id);
	const status = customer ? 200 : 404;

	return res.status(status).json(customer);
});

server.listen(3000);