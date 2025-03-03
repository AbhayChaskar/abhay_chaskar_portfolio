import navbar_background from './navbar_background.png';
import footer_background from './footer_background.png';
import profile_background from './profile_background.png';
import profile_image from './profile_image.jpg';
import full_profile from './full_profile.jpg';
import code_icon from './code_icon.png';
import edu_icon from './edu_icon.png';
import project_icon from './project_icon.png';
import vscode from './vscode.png';
import figma from './figma.png';
import devtools from './devtools.png';
import github from './github.png';
import postman from './postman.svg';
import logo from './logo.png';
import html from './html.svg';
import css from './css.svg';
import js from './js.svg';
import reactjs from './reactjs.webp';
import nextjs from './nextjs.svg';
import electronjs from './electronjs.png';
import sql from './sql.svg';
import salesforce from './salesforce.png';
import python from './python.png';
import jira from './jira.svg';
import restapi from './restapi.png';
import git from './git.png';
import accenture from './accenture.svg';
import infosys from './infosys.png';
import neosoft from './neosoft.jpeg';

export const assets = {
    navbar_background,
    footer_background,
    profile_background,
    profile_image,
    full_profile,
    code_icon,
    edu_icon,
    project_icon,
    vscode,
    figma,
    devtools,
    github,
    postman,
    logo,
    html,
    css,
    js,
    reactjs,
    nextjs,
    electronjs,
    sql,
    salesforce,
    python,
    jira,
    restapi,
    git,
    accenture,
    infosys,
    neosoft
};

export const projectData = [
    {
        title: 'My Portfolio',
        bgImage: '/portfolio.jpg',
        repoLink:'https://github.com/AbhayChaskar/abhay_chaskar_portfolio',
        deployLink:''
    },
    {
        title: 'KyaLoo Store',
        bgImage: '/kyaloo_store.jpg',
        repoLink:'https://github.com/AbhayChaskar/kyaLoo_store',
        deployLink:''
    },
    {
        title: 'Admin panel',
        bgImage: '/admin_dashboard.jpg',
        repoLink:'https://github.com/AbhayChaskar/admin_panel',
        deployLink:''
    },
    {
        title: 'LikhteJao Blog',
        bgImage: '/likhtejao_blog.jpg',
        repoLink:'https://github.com/AbhayChaskar/Llikhtejao_blog',
        deployLink:''
    },
]

export const aboutList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'JavaScript, React Js, Next Js, SFCC' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Engineering in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built and Deployed 3 Projects' }
];

export const toolsData = [
    { icon: assets.vscode, title: 'Vs Code' },
    { icon: assets.figma, title: 'Figma' },
    { icon: assets.devtools, title: 'Chrome Developer tools' },
    { icon: assets.github, title: 'Github Desktop' },
    { icon: assets.postman, title: 'Postman' }
];

export const experienceData = [
    { icon: assets.accenture, title: 'Custom Software Analyst', description: ['Developed Interactive User Interfaces using component based architecture for flexibility.',  'Built APIs in python using Fast API framework.', 'Reviewd code, troubleshoot & debugging the issues for sustainable web applications.', 'Maintained 85% Client retention rate with effective communication & collaboration.', 'Delivered a reliable product with all features & attained 95% client satisfaction rate.'], duration: 'Nov 2024 - Present' },
    { icon: assets.infosys, title: 'Systems Engineer', description: ['Designed & developed UI web pages based on wireframes & figma.', 'Protected routes, throttling & debouncing events used to enhance web performance & security.', 'API integration & error handling using Asynchronous Code.', 'Built an exe application using Electron Builder.', 'Increased web performance by 30% & Improved Security for authenticated users.'], duration: 'Mar 2022 - Oct 2024' },
    { icon: assets.neosoft, title: 'Software Engineer', description: ['Well trained in Frontend technologies, worked and collaborated with team in training project.', 'Designed Pizza delivery app using MERN stack.', 'Used variety of libraries to design webpages like CSS, Bootstrap & MUI.', 'Followed Agile methodologies for seamless delivery of an application.', 'Code Management using GIT version control tool.', 'Testing RESTful APIs on Postman.'], duration: 'July 2021 - Mar 2022' }
];

export const skillsData = [
    { icon: assets.html, title: 'HTML 5'},
    { icon: assets.css, title: 'CSS 3'},
    { icon: assets.js, title: 'JavaScript'},
    { icon: assets.reactjs, title: 'ReactJS'},
    { icon: assets.nextjs, title: 'NextJS'},
    { icon: assets.restapi, title: 'RESTful API' },
    { icon: assets.salesforce, title: 'Commerce Cloud' },
    { icon: assets.python, title: 'python' },
    { icon: assets.sql, title: 'SQL' },
    { icon: assets.electronjs, title: 'ElectronJS'},
    { icon: assets.git, title: 'Git/Github' },
    { icon: assets.jira, title: 'Jira tool' },
]