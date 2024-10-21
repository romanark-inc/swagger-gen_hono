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
});

const PostGetAllRoute = getRoute({
  path: "posts",
  responsesSchema: postListResponse,
  tags: "Posts",
});

const PostGetByIDRoute = getRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  responsesSchema: postSchema,
  tags: "Posts",
});

const PostUpdateRoute = putRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  requestBodySchema: postRequestBody,
  responsesSchema: postIDResponse,
  tags: "Posts",
});

const PostDeleteRoute = deleteRoute({
  path: "posts/{post_id}",
  paramsSchema: postParams,
  responsesSchema: postIDResponse,
  tags: "Posts",
});

export const PostRoutes = [
  PostCreateRoute,
  PostGetAllRoute,
  PostGetByIDRoute,
  PostUpdateRoute,
  PostDeleteRoute,
];
