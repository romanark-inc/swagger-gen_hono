import { OpenAPIHono } from "@hono/zod-openapi";
import { getRoute, postRoute, putRoute, deleteRoute } from "../util";
export const metimoApi = new OpenAPIHono();

// routes.forEach((route: any) => {
//   OtegamiApi.openapi(route, (c) => {
//     return c.json({});
//   });
// });
