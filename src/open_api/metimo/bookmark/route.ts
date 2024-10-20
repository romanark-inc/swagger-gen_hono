import {
  bookmarkSchema,
  bookmarkListResponse,
  bookmarkParams,
  bookmarkRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const BookmarkCreateRoute = postRoute({
  path: "bookmarks",
  requestBodySchema: bookmarkRequestBody,
  responsesSchema: bookmarkSchema,
});

const BookmarkGetAllRoute = getRoute({
  path: "bookmarks",
  responsesSchema: bookmarkListResponse,
});

const BookmarkGetByIDRoute = getRoute({
  path: "bookmarks/{bookmark_id}",
  paramsSchema: bookmarkParams,
  responsesSchema: bookmarkSchema,
});

const BookmarkUpdateRoute = putRoute({
  path: "bookmarks/{bookmark_id}",
  paramsSchema: bookmarkParams,
  requestBodySchema: bookmarkRequestBody,
  responsesSchema: bookmarkSchema,
});

const BookmarkDeleteRoute = deleteRoute({
  path: "bookmarks/{bookmark_id}",
  paramsSchema: bookmarkParams,
  responsesSchema: bookmarkSchema,
});

export const BookmarkRoutes = [
  BookmarkCreateRoute,
  BookmarkGetAllRoute,
  BookmarkGetByIDRoute,
  BookmarkUpdateRoute,
  BookmarkDeleteRoute,
];
