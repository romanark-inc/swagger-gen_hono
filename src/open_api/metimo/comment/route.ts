import {
  commentIDResponse,
  commentSchema,
  commentParams,
  commentRequestBody,
  commentListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const CommentCreateRoute = postRoute({
  path: "comments",
  requestBodySchema: commentRequestBody,
  responsesSchema: commentIDResponse,
});

const CommentGetAllRoute = getRoute({
  path: "comments",
  responsesSchema: commentListResponse,
});

const CommentGetByIDRoute = getRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  responsesSchema: commentSchema,
});

const CommentUpdateRoute = putRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  requestBodySchema: commentRequestBody,
  responsesSchema: commentIDResponse,
});

const CommentDeleteRoute = deleteRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  responsesSchema: commentIDResponse,
});

export const CommentRoutes = [
  CommentCreateRoute,
  CommentGetAllRoute,
  CommentGetByIDRoute,
  CommentUpdateRoute,
  CommentDeleteRoute,
];
