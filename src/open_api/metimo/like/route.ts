import {
  likeSchema,
  likeParams,
  likeRequestBody,
  likeListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const LikeCreateRoute = postRoute({
  path: "likes",
  requestBodySchema: likeRequestBody,
  responsesSchema: likeSchema,
});

const LikeGetAllRoute = getRoute({
  path: "likes",
  responsesSchema: likeListResponse,
});

const LikeGetByIDRoute = getRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  responsesSchema: likeSchema,
});

const LikeUpdateRoute = putRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  requestBodySchema: likeRequestBody,
  responsesSchema: likeSchema,
});

const LikeDeleteRoute = deleteRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  responsesSchema: likeSchema,
});

export const LikeRoutes = [
  LikeCreateRoute,
  LikeGetAllRoute,
  LikeGetByIDRoute,
  LikeUpdateRoute,
  LikeDeleteRoute,
];
