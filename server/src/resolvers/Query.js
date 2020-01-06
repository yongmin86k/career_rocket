const fragmentStudents = `
fragment studentWithConsultingStudentState on Student {
  id
    profileImg
    name
    gender
    birthDate
    email
    consulting {
      process
      createdAt
    }
    studentState {
     statusType
     createdAt 
    }
}
`;

function users(root, args, context, info) {
  return context.prisma.users();
}

function students(root, args, context, info) {
  return context.prisma.students().$fragment(fragmentStudents);
}

module.exports = { users, students };
