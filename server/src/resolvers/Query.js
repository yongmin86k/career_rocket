function users(root, args, context, info) {
  return context.prisma.users();
}

module.exports = { users };
