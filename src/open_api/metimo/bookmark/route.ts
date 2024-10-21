import {
  bookmarkIDResponse,
  bookmarkSchema,
  bookmarkListResponse,
  bookmarkParams,
  bookmarkRequestBody,
} from "./schema";
import { getRoute, postRoute, putRoute, deleteRoute } from "../../util";

const BookmarkCreateRoute = postRoute({
  path: "bookmarks",
  requestBodySchema: bookmarkRequestBody,
  responsesSchema: bookmarkIDResponse,
  tags: "Bookmarks",
});

const BookmarkGetAllRoute = getRoute({
  path: "bookmarks",
  responsesSchema: bookmarkListResponse,
  tags: "Bookmarks",
});

const BookmarkGetByIDRoute = getRoute({
  path: "bookmarks/{bookmark_id}",
  paramsSchema: bookmarkParams,
  responsesSchema: bookmarkSchema,
  tags: "Bookmarks",
});

const BookmarkUpdateRoute = putRoute({
  path: "bookmarks/{bookmark_id}",
  paramsSchema: bookmarkParams,
  requestBodySchema: bookmarkRequestBody,
  responsesSchema: bookmarkIDResponse,
  tags: "Bookmarks",
});

const BookmarkDeleteRoute = deleteRoute({
  path: "bookmarks/{bookmark_id}",
  paramsSchema: bookmarkParams,
  responsesSchema: bookmarkIDResponse,
  tags: "Bookmarks",
});

export const BookmarkRoutes = [
  BookmarkCreateRoute,
  BookmarkGetAllRoute,
  BookmarkGetByIDRoute,
  BookmarkUpdateRoute,
  BookmarkDeleteRoute,
];
