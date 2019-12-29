const Query = {
  users: (root, args, context, info) => {
    return context.prisma.users();
  }
};

module.exports = { Query };
