// Assuming you have a separate script (e.g., seedDatabase.js)
const mongoose = require('mongoose');
const Users = require('./Models/userModel'); // Adjust the path based on your project structure

mongoose.set("strictQuery", false);

const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const dummyData = [
    {
        _id: 1,
        firstName: "Riley",
        lastName: "Cheung",
        role: "client",
        email: "rileycheung@example.com",
        password: "Rc_123456789",
        // jobPosting: [0,5],
        // jobPosted:[1,2]

    },
    {
        _id: 2,
        firstName: "Luisa",
        lastName: "Guzman",
        role: "client",
        email: "luisaguzman@example.com",
        password: "lg_987654321",
        // jobPosting: [6,7],
        // jobPosted:[3,4]
    },
    {
        _id: 3,
        firstName: "Xavier",
        lastName: "Pardanaud",
        role: "jobSeeker",
        email: "xavierpardanuad@example.com",
        password: "Xp_456456456",
        areaOfInterest:["housing", "transportation"],
        // jobApplied:[0,5,7],
        // jobHistory:[2,3]
    },
    {
        _id: 4,
        firstName: "John",
        lastName: "Smith",
        role: "jobSeeker",
        email: "johnsmith@example.com",
        password: "Js_123123123",
        areaOfInterest:["housing", "education", "socializing"],
        // jobApplied:[0,5],
        // jobHistory:[]
    },
    {
        _id: 5,
        firstName: "Jane",
        lastName: "Johnson",
        role: "jobSeeker",
        email: "janejohnson@example.com",
        password: "Jj_789789789",
        areaOfInterest:["employment", "generalTasks"],
        // jobApplied:[],
        // jobHistory:[1,4]
    },
];

const seedDatabase = async () => {
  try {
    await Users.insertMany(dummyData);
    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
