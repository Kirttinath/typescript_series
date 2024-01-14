//* Enums in TS :

//? Enums in Typescript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.

//* In Typescript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric valves starting from 6. The default numeric value for the first enus constant is 0, and subsequent enum constants receive values incremented by 1.

// user1 = login => normaluser
// user2 = login => admin user

enum Roles {
  user = "user",
  admin = "admin",
}

type loginDetails = {
  username?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: loginDetails = {
  username: "Kojha",
  email: "Kirtti@gmail.com",
  password: "Kojha",
  role: Roles.user,
};

const user2: loginDetails = {
  username: "Kirti",
  email: "nath@gmail.com",
  password: "Knath",
  role: Roles.admin,
};

const isAdmin = (user: loginDetails) => {
  const { username, role } = user;
  return role === "admin"
    ? `${username} can edit website`
    : `${username} can't edit the website.`;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
