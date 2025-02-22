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

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.ui_icon, title: 'UI design', description: 'UI design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.ui_icon, title: 'API Integration', description: 'UI/UX design focuses', link: '' },
]

export const infoList = [
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
    { icon: assets.accenture, title: 'Senior Analyst', description: 'Developed and maintained the Salesforce CRM', duration: 'Nov 2024 - Present' },
    { icon: assets.infosys, title: 'Systems Engineer', description: 'Designed and developed the UI/UX of the website', duration: 'Mar 2022 - Oct 2024' },
    { icon: assets.neosoft, title: 'Software Engineer', description: 'Undergone through Full Stack Training', duration: 'July 2021 - Mar 2022' }
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