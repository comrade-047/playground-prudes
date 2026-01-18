import 'dotenv/config';
import Profile from "./models/Profile";
import Project from "./models/Project";
import Skill from "./models/Skill";
import connectDB from "./config/db";

const seedData = async () => {
    try {
        await connectDB();
        console.log('Starting database seed ...');

        await Profile.deleteMany({});
        await Project.deleteMany({});
        await Skill.deleteMany({});
        console.log('Cleared existing data');

        await Profile.create({
            name: 'Amit Kumar',
            title: 'Full Stack Developer',
            email: 'amitkumar.4.7.09.27@gmail.com',
            bio: 'Third-year student at NIT Delhi and a continuous learner who thrives on challenges. Passionate about applying technical knowledge to build solutions that make a meaningful impact.',
            education: [
                {
                    degree: 'B.Tech in Electronics & Communication Engineering',
                    institution: 'National Institute of Technology, Delhi',
                    yearOfCompletion: '2027'
                },
                {
                    degree: 'Senior Secondary (Class XII)',
                    institution: 'Atal Adarsh Bal Vidyalaya, Delhi',
                    yearOfCompletion: '2022'
                }
            ],
            experience: [
                {
                    company: 'Medium Turtle',
                    role: 'Frontend Developer Intern',
                    startDate: new Date('2025-09-05'),
                    endDate: new Date('2025-11-06'),
                    responsibilities: [
                        'Worked on features related to chat collaboration and integrated frontend components with backend functionalities.',
                        'Participated in team meetings and discussions to contribute ideas and efficiently resolve frontend issues.',
                        'Learned and implemented technologies and frameworks as per project requirements while adhering to industry best practices.'
                    ]
                }
            ],
            socialLinks: {
                github: 'https://github.com/comrade-047',
                linkedin: 'https://www.linkedin.com/in/amit-kumar-bab0872b2/',
                portfolio: 'https://code-sphere.dev'
            }
        });
        console.log('Profile created');

        const skills = [
            { name: 'JavaScript', category: 'Language', proficiency: 9 },
            { name: 'TypeScript', category: 'Language', proficiency: 8 },
            { name: 'C++', category: 'Language', proficiency: 8 },
            { name: 'React', category: 'Frontend', proficiency: 9 },
            { name: 'Next.js', category: 'Frontend', proficiency: 8 },
            { name: 'TailwindCSS', category: 'Frontend', proficiency: 8 },
            { name: 'Node.js', category: 'Backend', proficiency: 9 },
            { name: 'Express.js', category: 'Backend', proficiency: 9 },
            { name: 'MongoDB', category: 'Database', proficiency: 8 },
            { name: 'PostgreSQL', category: 'Database', proficiency: 7 },
            { name: 'Docker', category: 'Tools', proficiency: 7 },
            { name: 'AWS (EC2)', category: 'Cloud', proficiency: 6 },
            { name: 'Postman', category: 'Tools', proficiency: 7 },
            { name: 'Git/GitHub', category: 'Tools', proficiency: 9 }
        ];

        await Skill.insertMany(skills);
        console.log('Skills created');

        const projects = [
            {
                title: 'CodeSphere',
                description: 'An Online Judge Platform that allows users to submit and evaluate code solutions. Features a secure code compiler for dynamic execution in isolated environments.',
                techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'AWS'],
                repoLink: 'https://github.com/comrade-047/codeSphere',
                liveLink: 'https://www.code-sphere.dev',
                images: []
            },
            {
                title: 'Paryatak Suraksha',
                description: 'A tourist safety and assistance application developed for the Code Slayer 2k25 Hackathon.',
                techStack: ['Node.js', 'Express', 'SQL', 'Mapbox API'],
                repoLink: 'https://github.com/comrade-047/paryatak-suraksha-backend',
                liveLink: 'https://paryatak-suraksha.vercel.app',
                images: []
            }
        ];

        await Project.insertMany(projects);
        console.log('Projects created');

        console.log('Seeding completed');
        process.exit(0);

    } catch (error) {
        console.error('Seeding failed', error);
        process.exit(1);
    }
}

seedData();