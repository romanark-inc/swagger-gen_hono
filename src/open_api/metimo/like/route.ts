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
  summary: "like作成",
  description: "like作成",
});

const LikeGetAllRoute = getRoute({
  path: "likes",
  responsesSchema: likeListResponse,
  tags: "Like",
  summary: "like一覧取得",
  description: "like一覧取得",
});

const LikeGetByIDRoute = getRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  responsesSchema: likeSchema,
  tags: "Like",
  summary: "like取得",
  description: "like取得",
});

const LikeUpdateRoute = putRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  requestBodySchema: likeRequestBody,
  responsesSchema: likeIDResponse,
  tags: "Like",
  summary: "like更新",
  description: "like更新",
});

const LikeDeleteRoute = deleteRoute({
  path: "likes/{like_id}",
  paramsSchema: likeParams,
  responsesSchema: likeIDResponse,
  tags: "Like",
  summary: "like削除",
  description: "like削除",
});

export const LikeRoutes = [
  LikeCreateRoute,
  LikeGetAllRoute,
  LikeGetByIDRoute,
  LikeUpdateRoute,
  LikeDeleteRoute,
];
