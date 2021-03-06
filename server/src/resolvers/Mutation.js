const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../utils");

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });

  const newData = { ...user };
  delete newData.password;

  const token = jwt.sign({ ...newData }, APP_SECRET);

  return {
    token,
    user
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({ username: args.username });
  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }
  const newData = { ...user };
  delete newData.password;

  const token = jwt.sign({ ...newData }, APP_SECRET);

  return {
    token,
    user
  };
}

module.exports = {
  signup,
  login
};
