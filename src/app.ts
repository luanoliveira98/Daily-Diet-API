import fastify from "fastify";
import cookie from "@fastify/cookie"

// TODO import routes

export const app = fastify();

app.register(cookie)

// TODO register routes