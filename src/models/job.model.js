
export default class JobModel {
    constructor(id, category, desc, location, companyName, salary, skills, apply, openings,applicants=[],recruiterId,imgurl) {
            this.id = id,
            this.category = category,
            this.desc = desc,
            this.location = location,
            this.companyName = companyName,
            this.salary = salary,
            this.skills = skills,
            this.apply = apply,
            this.openings = openings,
            this.applicants = applicants,
            this.recruiterId = recruiterId,
            this.imgurl=imgurl;
    }
    static getAll() {
        return this.jobs;
    }
    static color() {
        return pastelColors;
    }
    static addJob(category, desc, location, companyName, salary, skills, apply, openings,[],recruiterId,imgurl) {
        let newJob = new JobModel(this.jobs.length + 1, category, desc, location, companyName, salary, skills, apply, openings,[],recruiterId,imgurl);
        this.jobs.push(newJob);
    }
    static update(jobObj) {
        const jobIndex = this.jobs.findIndex(job => job.id === Number(jobObj.id)); // Ensure ID is an integer

        if (jobIndex !== -1) {
            this.jobs[jobIndex] = { ...this.jobs[jobIndex], ...jobObj }; // Update job with new data
            console.log(`Job with ID ${jobObj.id} updated successfully.`);

        } else {
            console.error(`Job with ID ${jobObj.id} not found.`);
        }

    }
    static getId(id) {
        return this.jobs.find((f) => f.id == id);
    }
    static delete(id) {
        const i = this.jobs.findIndex((j) => j.id == id);
        if (i !== -1) {
            this.jobs.splice(i, 1);
            return true;
        }
        return false;

    }
    static addNewApplicant(id, ...applicantData) {
        const foundedIndex = this.jobs.findIndex((j) => j.id == id);
        if (foundedIndex === -1) {
            console.log("Job not found with ID:", id);
            return;
        }
        let applicantId = this.jobs[foundedIndex].applicants.length + 1;
        this.jobs[foundedIndex].applicants.push({
            applicantId: applicantId,
            name: applicantData[0],
            email: applicantData[1],
            contact: applicantData[2],
            resumePath: applicantData[3]
        });
        console.log("Applicant added to job ID:", id);
        return this.jobs[foundedIndex].applicants;
    }
    static allApplicants(id) {
        const index = this.jobs.findIndex((j) => { return j.id == id })
        return this.jobs[index].applicants;
    }
    static searchJob(name) {
        // Check if name is defined and is a string
        if (!name || typeof name !== 'string') {
            console.log("Search name is not valid:", name);
            return []; // Return an empty array if name is invalid
        }
    
        // Convert search term to lower case for case-insensitive comparison
        const lowerCaseName = name.toLowerCase();
    
        // Log the jobs array for debugging
        console.log("Jobs array:", this.jobs);
    
        return this.jobs.filter(job => {
            // Check if job has a defined companyName and if it's a string
            if (job.companyName && typeof job.companyName === 'string') {
                console.log("Checking job:", job.companyName); // Log each job being checked
                return job.companyName.toLowerCase().includes(lowerCaseName);
            }
            return false; // Exclude jobs with undefined or non-string companyName
        });
    }
     
    static jobs = [
    new JobModel(1, "Tech", "SDE", "Gurgaon HR IND Remote", "Coding Ninjas", "14-20lpa",
        ["node", "express", "mongodb", "c++", "c", "java"], "2024-09-05", 3,
        [{ applicantId: '1', name: "Priya", email: "priya@gmail.com", contact: "1234567899", resumePath: "resume.pdf" }],'123',
        'https://files.codingninjas.in/article_images/favicon-and-cherrypy-1-1660924366.webp'
    ),
    new JobModel(2, "Tech", "Angular Developer", "Pune IND On-Site", "Go Digit", "6-10lpa",
        ["node", "express", "mongodb", "c++", "c", "java"], "2024-10-05", 10, [],'456',
        'https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/10/full/1715328135-6262.png?im=FeatureCrop,size=(826,465)'

    ),
    // new JobModel(3, "Tech", "SDE", "Bangalore IND", "Juspay", "14-20lpa",
    //     ["node", "express", "mongodb", "c++", "c", "java"], "2024-09-05", 3,[],'789'

    // ),
    // new JobModel(4, "Tech", "SDE2", "Gurgaon HR IND Remote", "Google", "1-2lpa",
    //     ["node", "express", "mongodb", "c++", "c", "java"]

    // ),
    // new JobModel(5, "Tech", "UI/UX Developer", "Pune IND On-Site", "Powerview", "7-10lpa",
    //     ["node", "express", "mongodb", "c++", "c", "java"]

    // ),
    // new JobModel(6, "Tech", "SDE1", "Bangalore IND", "Juspay", "14-20lpa",
    //     ["node", "express", "mongodb", "c++", "c", "java"]
    // )
    // new JobModel(4, "Tech", "SDE", "Bangalore IND", "Juspay", "14-20lpa",
    //     ["node", "express", "mongodb", "c++", "c", "java"]
    // )
]
}
const pastelColors = ["#fae2f4", "#eceff4", "#f5b9c6", "#f9d4d1", "#b0ccf9", "#fbe1cc", "#d4f6ee", "#e3dbfb", "#dff3fd"];
