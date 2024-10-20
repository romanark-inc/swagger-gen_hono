import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { OtegamiApi } from "./otegami";

const openapi = new OpenAPIHono();

openapi.route("/api/v1", OtegamiApi);

//swagger ui
openapi.get("/ui", swaggerUI({ url: "/api/doc" }));
openapi.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default openapi;
