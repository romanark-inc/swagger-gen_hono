import {
  commentIDResponse,
  commentSchema,
  commentParams,
  commentRequestBody,
  commentListResponse,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";
import { getListQuery } from "../../schema/query";

const CommentCreateRoute = postRoute({
  path: "comments",
  requestBodySchema: commentRequestBody,
  responsesSchema: commentIDResponse,
  tags: "Comment",
  summary: "comment作成",
  description: "comment作成",
});

const CommentGetAllRoute = getRoute({
  path: "comments",
  querySchema: getListQuery,
  responsesSchema: commentListResponse,
  tags: "Comment",
  summary: "comment一覧取得",
  description: "comment一覧取得",
});

const CommentGetByIDRoute = getRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  responsesSchema: commentSchema,
  tags: "Comment",
  summary: "comment取得",
  description: "comment取得",
});

const CommentUpdateRoute = putRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  requestBodySchema: commentRequestBody,
  responsesSchema: commentIDResponse,
  tags: "Comment",
  summary: "comment更新",
  description: "comment更新",
});

const CommentDeleteRoute = deleteRoute({
  path: "comments/{comment_id}",
  paramsSchema: commentParams,
  responsesSchema: commentIDResponse,
  tags: "Comment",
  summary: "comment削除",
  description: "comment削除",
});

export const CommentRoutes = [
  CommentCreateRoute,
  CommentGetAllRoute,
  CommentGetByIDRoute,
  CommentUpdateRoute,
  CommentDeleteRoute,
];
