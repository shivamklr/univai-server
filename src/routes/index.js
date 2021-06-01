const { Router } = require("express");
const testRoute = require("./test");
const router = Router();
const routes = [
    {
        path: "/test",
        route: testRoute,
    },
];
routes.forEach((route) => router.use(route.path, route.route));
module.exports = router;
