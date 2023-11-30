const users = [
    {
        clientId: 1,
        firstName: "Riley",
        lastName: "Cheung",
        role: "client",
        email: "rileycheung@example.com",
        password: "Rc_123456789",
        // jobPosting: [0,5],
        // jobPosted:[1,2]

    },
    {
        clientId: 2,
        firstName: "Luisa",
        lastName: "Guzman",
        role: "client",
        email: "luisaguzman@example.com",
        password: "lg_987654321",
        // jobPosting: [6,7],
        // jobPosted:[3,4]
    },
    {
        clientId: 3,
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
        clientId: 4,
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
        clientId: 5,
        firstName: "Jane",
        lastName: "Johnson",
        role: "jobSeeker",
        email: "janejohnson@example.com",
        password: "Jj_789789789",
        areaOfInterest:["employment", "generalTasks"],
        // jobApplied:[],
        // jobHistory:[1,4]
    },
]

module.exports = users;