import {
  postParams,
  postRequestBody,
  postSchema,
  postListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const PostCreateRoute = postRoute({
  path: "posts",
  requestBodySchema: postRequestBody,
  responsesSchema: postSchema,
});

const PostGetAllRoute = getRoute({
  path: "posts",
  responsesSchema: postListResponse,
});

const PostGetByIDRoute = getRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  responsesSchema: postSchema,
});

const PostUpdateRoute = putRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  requestBodySchema: postRequestBody,
  responsesSchema: postSchema,
});

const PostDeleteRoute = deleteRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  responsesSchema: postSchema,
});

const PostGetAllByUserRoute = getRoute({
  path: "users/{user_id}/posts",
  paramsSchema: postParams,
  responsesSchema: postListResponse,
});

export const PostRoutes = [
  PostCreateRoute,
  PostGetAllRoute,
  PostGetByIDRoute,
  PostUpdateRoute,
  PostDeleteRoute,
  PostGetAllByUserRoute,
];
