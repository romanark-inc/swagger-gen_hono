import {
  likeIDResponse,
  likeSchema,
  likeParams,
  likeRequestBody,
  likeListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const LikeCreateRoute = postRoute({
  path: "likes",
  requestBodySchema: likeRequestBody,
  responsesSchema: likeIDResponse,
  tags: "Like",
});

const LikeGetAllRoute = getRoute({
  path: "likes",
  responsesSchema: likeListResponse,
  tags: "Like",
});

const LikeGetByIDRoute = getRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  responsesSchema: likeSchema,
  tags: "Like",
});

const LikeUpdateRoute = putRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  requestBodySchema: likeRequestBody,
  responsesSchema: likeIDResponse,
  tags: "Like",
});

const LikeDeleteRoute = deleteRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  responsesSchema: likeIDResponse,
  tags: "Like",
});

export const LikeRoutes = [
  LikeCreateRoute,
  LikeGetAllRoute,
  LikeGetByIDRoute,
  LikeUpdateRoute,
  LikeDeleteRoute,
];
