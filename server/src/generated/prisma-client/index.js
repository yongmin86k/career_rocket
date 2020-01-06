"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Student",
    embedded: false
  },
  {
    name: "Consulting",
    embedded: false
  },
  {
    name: "StudentState",
    embedded: false
  },
  {
    name: "GenderType",
    embedded: false
  },
  {
    name: "ProcessType",
    embedded: false
  },
  {
    name: "StatusType",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
