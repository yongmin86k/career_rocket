const fragmentStudents = `
fragment studentInfo on Student {
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
  trainingInfo {
    trainingCourse {
      id
      title
      dateStart
      dateEnd
      maxStudents
      createdAt
    }
    statusType
  }
}
`;

const fragmentTrainings = `
  fragment trainingInfo on Training {
    id
    title
    dateStart
    dateEnd
    maxStudents
    createdAt
    studentsInfo {
      student {
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
      statusType
    }
  }
`;

function users(root, args, context, info) {
  return context.prisma.users();
}

function students(root, args, context, info) {
  return context.prisma.students().$fragment(fragmentStudents);
}

function trainings(root, args, context, info) {
  return context.prisma.trainings().$fragment(fragmentTrainings);
}

module.exports = { users, students, trainings };
