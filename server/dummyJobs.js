// Assuming you have a separate script (e.g., seedDatabase.js)
const mongoose = require('mongoose');
const Jobs = require('./Models/jobsModel'); // Adjust the path based on your project structure

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
    _id: 0,
    clientId: 1,
    category: "housing",
    jobTitle: "Housing Lease Consultant",
    jobDescription: "Seeking an experienced individual to review and explain the lease agreement for a new apartment. Must have knowledge of local tenancy laws and be able to advise on key terms and conditions.",
    jobDate: "2022-11-01",
    postCreated: "2022-07-15",
    address: "2050 West Broadway, Vancouver, BC V6J 1Z4",
    applicants: [
      { id: 3, price: 250 },
      { id: 4, price: 300 },
    ],
    jobProvider: -1,
    status: "searching",
  },
  {
    _id: 1,
    clientId: 1,
    category: "employment",
    jobTitle: "Employment Document Helper",
    jobDescription:
      "Assistance needed to understand and fill out employment-related documents and applications.",
    jobDate: "2022-08-22",
    postCreated: "2022-07-15",
    address: "789 Granville Road, Vancouver, BC V6Z 1E4",
    applicants: [{ id: 5, price: 10 }],
    jobProvider: 5,
    status: "completed",
  },
  {
    _id: 2,
    clientId: 1,
    category: "transportation",
    jobTitle: "Airport Pickup Coordinator",
    jobDescription:
      "Need assistance with airport pickup and transportation to my new residence, along with a brief neighborhood orientation.",
    jobDate: "2022-10-25",
    postCreated: "2022-07-15",
    address: "2468 Main Street, Vancouver, BC V5T 3E4",
    applicants: [
      { id: 3, price: 80 },
      { id: 4, price: 130 },
    ],
    jobProvider: 3,
    status: "completed",
  },
  {
    _id: 3,
    clientId: 2,
    category: "housing",
    jobTitle: "Apartment Viewing Assistant",
    jobDescription:
      "Seeking a trustworthy individual to visit apartments, take detailed photos and videos, and inquire about rental terms.",
    jobDate: "2022-09-12",
    postCreated: "2022-06-07",
    address: "4321 Kitsilano Ave, Vancouver, BC V6J 1Y7",
    applicants: [
      { id: 3, price: 50 },
      { id: 4, price: 70 },
    ],
    jobProvider: 3,
    status: "searching",
  },
  {
    _id: 4,
    clientId: 2,
    category: "generalTasks",
    jobTitle: "Grocery Shopping Guide",
    jobDescription:
      "Looking for someone to guide me through local grocery stores and help identify essential items for purchase.",
    jobDate: "2022-09-15",
    postCreated: "2022-09-01",
    address: "8642 Oak Street, Vancouver, BC V6P 4A9",
    applicants: [{ id: 5, price: 50 }],
    jobProvider: 5,
    status: "completed",
  },
  {
    _id: 5,
    clientId: 1,
    category: "transportation",
    jobTitle: "Public Transport Navigator",
    jobDescription:
      "Seeking assistance to understand the public transportation system and routes relevant to my daily commute.",
    jobDate: "2022-12-20",
    postCreated: "2022-09-15",
    address: "3210 Mount Pleasant Road, Vancouver, BC V5T 0C7",
    applicants: [
      { id: 3, price: 75 },
      { id: 4, price: 90 },
    ],
    jobProvider: -1,
    status: "searching",
  },
  {
    _id: 6,
    clientId: 2,
    category: "housing",
    jobTitle: "Temporary Accommodation Guide",
    jobDescription: "Require help in finding and setting up temporary accommodation for the first month after arrival.",
    jobDate: "2022-10-25",
    postCreated: "2022-10-01",
    address: "2050 West Broadway, Vancouver, BC V6J 1Z4",
    applicants: [
      { id: 3, price: 120 },
      { id: 4, price: 170 },
    ],
    jobProvider: -1,
    status: "searching",
  },
  {
    _id: 7,
    clientId: 2,
    category: "transportation",
    jobTitle: "Personal driver for the road test appointment",
    jobDescription: "Need a reliable and punctual driver to assist with transportation to and from the ICBC facility for the road test. Familiarity with ICBC procedures preferred.",
    jobDate: "2022-10-19",
    postCreated: "2022-10-15",
    address: "3120 Cambie Street, Vancouver, BC V5Z 2W2",
    applicants: [{ id: 3, price: 50 }],
    jobProvider: -1,
    status: "searching",
  },
  {
    _id: 8,
    clientId: 2,
    category: "education",
    jobTitle: "Daycare Selection Assistant",
    jobDescription: "Need assistance with visiting various daycares, taking photos of the facilities, and inquiring about their programs, staff credentials, and child care philosophies. The goal is to help make an informed decision on the best daycare option.",
    jobDate: "2022-10-19",
    postCreated: "2022-10-15",
    address: "2301 Granville Street, Vancouver, BC V6H 3G4",
    applicants: [],
    jobProvider: -1,
    status: "searching",
  },
];

const seedDatabase = async () => {
  try {
    await Jobs.insertMany(dummyData);
    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
