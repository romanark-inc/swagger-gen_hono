import { getRoute } from "../util/get";
import {
  UserSchema,
  UserRequestBody,
  UserFollowerSchema,
  UserParams,
  UserFollowerParams,
  UserFollowerRequestBody,
  PostSchema,
  PostRequestBody,
  PostParams,
} from "../schema/otegami";
import { postRoute } from "../util/post";
import { OpenAPIHono } from "@hono/zod-openapi";
import { putRoute } from "../util/put";
import { deleteRoute } from "../util/delete";



export const OtegamiApi = new OpenAPIHono();


export const UserCreateRoute = postRoute({
  path: "users",
  requestBodySchema: UserRequestBody,
  responsesSchema: UserSchema,
});


export const UserAllGetRoute = getRoute({
  path: "users",
  responsesSchema: UserSchema,
});

export const UserGetByIDRoute = getRoute({
  path: "users/{user_id}",
  paramsSchema: UserParams,
  responsesSchema: UserSchema,
});


export const UserUpdateRoute = putRoute({
  path: "users/{user_id}",
  paramsSchema: UserParams,
  requestBodySchema: UserRequestBody,
  responsesSchema: UserSchema,
});

export const UserDeleteRoute = deleteRoute({
  path: "users/{user_id}",
  paramsSchema: UserParams,
  responsesSchema: UserSchema,
});


export const UserFollowerCreateRoute = postRoute({
  path: "users/{user_id}/followers",
  paramsSchema: UserParams,
  requestBodySchema: UserFollowerRequestBody,
  responsesSchema: UserFollowerSchema,
});


export const UserFollowerGetByIDRoute = getRoute({  
  path: "users/{user_id}/followers/{follower_id}",
  paramsSchema: UserFollowerParams,
  responsesSchema: UserFollowerSchema,
});

export const UserFollowerUpdateRoute = putRoute({
  path: "users/{user_id}/followers/{follower_id}",
  paramsSchema: UserFollowerParams,
  requestBodySchema: UserFollowerRequestBody,
  responsesSchema: UserFollowerSchema,
});


export const UserFollowerDeleteRoute = deleteRoute({
  path: "users/{user_id}/followers/{follower_id}",
  paramsSchema: UserFollowerParams,
  responsesSchema: UserFollowerSchema,
});


export const PostCreateRoute = postRoute({
  path: "posts",
  requestBodySchema: PostRequestBody,
  responsesSchema: PostSchema,
});




export const PostGetByIDRoute = getRoute({
  path: "posts/{post_id}",
  paramsSchema: PostParams,
  responsesSchema: PostSchema,
});


export const PostUpdateRoute = putRoute({
  path: "posts/{post_id}",
  paramsSchema: PostParams,
  requestBodySchema: PostRequestBody,
  responsesSchema: PostSchema,
});


export const PostDeleteRoute = deleteRoute({
  path: "posts/{post_id}",
  paramsSchema: PostParams,
  responsesSchema: PostSchema,
});



export const PostGetAllRoute = getRoute({
  path: "posts",
  responsesSchema: PostSchema,

});


export const PostGetAllByUserRoute = getRoute({
  path: "users/{user_id}/posts",
  paramsSchema: UserParams,

  responsesSchema: PostSchema,
});





const api = [
  UserCreateRoute,
 UserAllGetRoute, 
  UserGetByIDRoute,
  UserUpdateRoute,
  UserDeleteRoute,


  
  UserFollowerCreateRoute,
  UserFollowerGetByIDRoute,
  UserFollowerUpdateRoute,
  UserFollowerDeleteRoute,

  PostCreateRoute,
  PostGetByIDRoute,
  PostUpdateRoute,
  PostDeleteRoute,
  PostGetAllRoute,
  PostGetAllByUserRoute,

];


api.forEach((route) => {
  OtegamiApi.openapi(route, (c) => {
    return c.json({});
  });
});
