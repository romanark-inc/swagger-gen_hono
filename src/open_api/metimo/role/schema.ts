import { z } from "@hono/zod-openapi";

const roleSchema = z
  .object({
    role_id: z.string(),
    role_name: z.string(),
  })
  .openapi({
    required: ["role_id", "role_name"],
  });

const roleIDResponse = roleSchema.pick({ role_id: true }).openapi({
  example: {
    role_id: "XXXXXXXX",
  },
});

const roleParams = roleSchema.pick({ role_id: true }).openapi({
  example: {
    role_id: "XXXXXXXX",
  },
});
const roleListResponse = roleSchema.pick({ role_id: true });

const roleRequestBody = roleSchema
  .pick({
    role_name: true,
  })
  .openapi({
    example: {
      role_name: "admin",
    },
    required: ["role_name"],
  });

export {
  roleSchema,
  roleListResponse,
  roleIDResponse,
  roleRequestBody,
  roleParams,
};
