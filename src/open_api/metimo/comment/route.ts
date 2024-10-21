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
  description: "comment作成",
});

const CommentGetAllRoute = getRoute({
  path: "comments",
  responsesSchema: commentListResponse,
  tags: "Comment",
  description: "comment一覧取得",
});

const CommentGetByIDRoute = getRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  responsesSchema: commentSchema,
  tags: "Comment",
  description: "comment取得",
});

const CommentUpdateRoute = putRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  requestBodySchema: commentRequestBody,
  responsesSchema: commentIDResponse,
  tags: "Comment",
  description: "comment更新",
});

const CommentDeleteRoute = deleteRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  responsesSchema: commentIDResponse,
  tags: "Comment",
  description: "comment削除",
});

export const CommentRoutes = [
  CommentCreateRoute,
  CommentGetAllRoute,
  CommentGetByIDRoute,
  CommentUpdateRoute,
  CommentDeleteRoute,
];
