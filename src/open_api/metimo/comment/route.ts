import {
  commentSchema,
  commentParams,
  commentRequestBody,
  commentListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const CommentCreateRoute = postRoute({
  path: "comments",
  requestBodySchema: commentRequestBody,
  responsesSchema: commentSchema,
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
  responsesSchema: commentSchema,
});

const CommentDeleteRoute = deleteRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  responsesSchema: commentSchema,
});

export {
  CommentCreateRoute,
  CommentGetAllRoute,
  CommentGetByIDRoute,
  CommentUpdateRoute,
  CommentDeleteRoute,
};
