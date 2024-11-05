import { z } from "@hono/zod-openapi";

const advisorRoleSchema = z
  .object({
    advisor_role_id: z.string(),
    advisor_id: z.string(),
    role_id: z.string(),
  })
  .openapi({
    required: ["advisor_role_id", "advisor_id", "role_id"],
  });
const advisorRoleIDResponse = advisorRoleSchema
  .pick({
    advisor_role_id: true,
  })
  .openapi({
    example: {
      advisor_role_id: "XXXXXXXX",
    },
  });
const advisorRoleParams = advisorRoleSchema
  .pick({
    advisor_role_id: true,
  })
  .openapi({
    example: {
      advisor_role_id: "XXXXXXXX",
    },
  });

const advisorRoleListResponse = z.array(advisorRoleSchema);

const advisorRoleRequestBody = advisorRoleSchema
  .pick({
    advisor_id: true,
    role_id: true,
  })
  .openapi({
    example: {
      advisor_id: "XXXXXXXX",
      role_id: "XXXXXXXX",
    },
    required: ["advisor_id", "role_id"],
  });

export {
  advisorRoleSchema,
  advisorRoleListResponse,
  advisorRoleIDResponse,
  advisorRoleRequestBody,
  advisorRoleParams,
};
