const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  // The codes synch the sequelize models and wipe out the tables
  await sequelize.sync({ force: true });

  // The code snippets call each of the seed data functions
  await seedUsers();
  await seedPosts();
  await seedComments();

  // Codes to exit the process with a successful exit code
  process.exit(0);
};

seedAll();