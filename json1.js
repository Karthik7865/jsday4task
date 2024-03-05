// For the given JSON iterate over all for loops (for, for in, for of, forEach)

const resume1  = {
    "name": "Karthik",
    "contact": {
        "phone": "7600771537",
        "email": "karthikdravid786@gmail.com",
        "address": "456 main street, Ahm"
    },
    "education": [
        {
            "ssc": "62%",
            "hsc": "59%",
            "degree": "Bachelor of Science in Chemistry",
            "graduationYear": "2017"
        }
    ],
    "experience": [
        {
            "position": "sofware developer",
            "company": "abc tech Inc",
            "years": 1.5
        }
    ],
    "skills": ["programming languagues: JavaScript, Python, Java",
    "web development: Html, css, react",
    "database: SQL"
] 
};

// for loop 
for(let i=0; i<resume1.education.length; i++){
    console.log(resume1.education[i].degree);
}

// using for in loop for objects
for(const key in resume1.contact){
    console.log(`${key}: ${resume1.contact[key]}`);
}

// using for of loop for arrays
for(const skill of resume1.skills){
    console.log(skill);
}

// using forEach for arrays
resume1.experience.forEach((job) => {
    console.log(job);
})