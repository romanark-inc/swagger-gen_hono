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
  tags: "Comment",
});

const CommentGetAllRoute = getRoute({
  path: "comments",
  responsesSchema: commentListResponse,
  tags: "Comment",
});

const CommentGetByIDRoute = getRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  responsesSchema: commentSchema,
  tags: "Comment",
});

const CommentUpdateRoute = putRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  requestBodySchema: commentRequestBody,
  responsesSchema: commentIDResponse,
  tags: "Comment",
});

const CommentDeleteRoute = deleteRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  responsesSchema: commentIDResponse,
  tags: "Comment",
});

export const CommentRoutes = [
  CommentCreateRoute,
  CommentGetAllRoute,
  CommentGetByIDRoute,
  CommentUpdateRoute,
  CommentDeleteRoute,
];
