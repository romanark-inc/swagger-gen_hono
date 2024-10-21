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
  description: "like作成",
});

const LikeGetAllRoute = getRoute({
  path: "likes",
  responsesSchema: likeListResponse,
  tags: "Like",
  description: "like一覧取得",
});

const LikeGetByIDRoute = getRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  responsesSchema: likeSchema,
  tags: "Like",
  description: "like取得",
});

const LikeUpdateRoute = putRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  requestBodySchema: likeRequestBody,
  responsesSchema: likeIDResponse,
  tags: "Like",
  description: "like更新",
});

const LikeDeleteRoute = deleteRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  responsesSchema: likeIDResponse,
  tags: "Like",
  description: "like削除",
});

export const LikeRoutes = [
  LikeCreateRoute,
  LikeGetAllRoute,
  LikeGetByIDRoute,
  LikeUpdateRoute,
  LikeDeleteRoute,
];
