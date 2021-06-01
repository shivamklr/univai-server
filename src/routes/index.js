const { Router } = require("express");
const testRoute = require("./test");
const testsRoute = require("./tests");
const router = Router();
const routes = [
    {
        path: "/test",
        route: testRoute,
    },
    {
        path: "/tests",
        route: testsRoute,
    },
];
routes.forEach((route) => router.use(route.path, route.route));
module.exports = router;
