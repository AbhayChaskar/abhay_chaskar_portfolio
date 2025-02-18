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
import logo from './logo.png';
import html from './html.svg';
import css from './css.svg';
import js from './js.svg';
import reactjs from './reactjs.webp';
import nextjs from './nextjs.svg';
import electronjs from './electronjs.png';
import sql from './sql.svg';
import salesforce from './salesforce.png';
import webpack from './webpack.png';
import jira from './jira.svg';
import restapi from './restapi.png';
import git from './git.png';
import github from './github.png';

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
    logo,
    html,
    css,
    js,
    reactjs,
    nextjs,
    electronjs,
    sql,
    salesforce,
    webpack,
    jira,
    restapi,
    git,
    github
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
    { icon: assets.github, title: 'Github Desktop' }
];

export const experienceData = [
    { title: 'Frontend Developer', description: 'Developed and maintained the frontend of the website', duration: '2020 - 2021' },
    { title: 'UI/UX Designer', description: 'Designed and developed the UI/UX of the website', duration: '2019 - 2020' },
    { title: 'Salesforce Developer', description: 'Developed and maintained the Salesforce CRM', duration: '2018 - 2019' }
];

export const skillsData = [
    { icon: assets.html, title: 'HTML 5'},
    { icon: assets.css, title: 'CSS 3'},
    { icon: assets.js, title: 'JavaScript'},
    { icon: assets.reactjs, title: 'ReactJS'},
    { icon: assets.nextjs, title: 'NextJS'},
    { icon: assets.restapi, title: 'RESTful API' },
    { icon: assets.electronjs, title: 'ElectronJS'},
    { icon: assets.sql, title: 'SQL' },
    { icon: assets.salesforce, title: 'SFCC'},
    { icon: assets.webpack, title: 'Webpack' },
    { icon: assets.jira, title: 'Jira tool' },
    { icon: assets.git, title: 'Git/Github' },
]