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
  responsesSchema: postIDResponse,
});

const PostDeleteRoute = deleteRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  responsesSchema: postIDResponse,
});

export const PostRoutes = [
  PostCreateRoute,
  PostGetAllRoute,
  PostGetByIDRoute,
  PostUpdateRoute,
  PostDeleteRoute,
];
