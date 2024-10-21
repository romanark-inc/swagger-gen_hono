import {
  postIDResponse,
  postParams,
  postRequestBody,
  postSchema,
  postListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const PostCreateRoute = postRoute({
  path: "posts",
  requestBodySchema: postRequestBody,
  responsesSchema: postIDResponse,
  tags: "Posts",
  description: "user作成",
});

const PostGetAllRoute = getRoute({
  path: "posts",
  responsesSchema: postListResponse,
  tags: "Posts",
  description: "user一覧取得",
});

const PostGetByIDRoute = getRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  responsesSchema: postSchema,
  tags: "Posts",
  description: "user取得",
});

const PostUpdateRoute = putRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  requestBodySchema: postRequestBody,
  responsesSchema: postIDResponse,
  tags: "Posts",
  description: "user更新",
});

const PostDeleteRoute = deleteRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  responsesSchema: postIDResponse,
  tags: "Posts",
  description: "user削除",
});

export const PostRoutes = [
  PostCreateRoute,
  PostGetAllRoute,
  PostGetByIDRoute,
  PostUpdateRoute,
  PostDeleteRoute,
];
