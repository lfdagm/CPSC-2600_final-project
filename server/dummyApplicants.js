// Assuming you have a separate script (e.g., seedDatabase.js)
const mongoose = require('mongoose');
const Applicants = require('./Models/applicantsModel'); // Adjust the path based on your project structure

mongoose.connect('mongodb+srv://vancomertester:fHlW1ORvAU3PKQVv@cluster0.kvg4nq6.mongodb.net/?retryWrites=true&w=majority');
//"mongodb+srv://vancomer:9i5wcgkKIGBr4pK6@vancomer.jozmuwy.mongodb.net/?retryWrites=true&w=majority"
const dummyData = [

      { jobId:0, userId: 3, price: 250 },
      { jobId:0, userId: 4, price: 300 },
      { jobId:1, userId: 5, price: 10 },
      { jobId:2, userId: 3, price: 80 },
      { jobId:2, userId: 4, price: 130 },
      { jobId:3, userId: 3, price: 50 },
      { jobId:3, userId: 4, price: 70 },
      { jobId:4, userId: 5, price: 50 },
      { jobId:5, userId: 3, price: 75 },
      { jobId:5, userId: 4, price: 90 },
      { jobId:6, userId: 3, price: 120 },
      { jobId:6, userId: 4, price: 170 },
      { jobId:7, userId: 3, price: 50 },
];

const seedDatabase = async () => {
  try {
    await Applicants.insertMany(dummyData);
    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
