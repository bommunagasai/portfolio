import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

/**
 *  @source of iconfonts
 *  https://icofont.com/icons
 * */

const CONTENT = {
  header: {
    name: 'Bommu Nagasai',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/naga-sai-397589113/',
      github: 'https://github.com/bommunagasai',
    }
  },
  aboutMe: {
    title: 'Software Engineer based in Bangalore, India',
    summary: "I'm web developer, and I'm very passionate and dedicated to my work. With almost 3 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the development process, from discussion and collaboration.",
    img: {
      src: 'https://images.pexels.com/photos/6102369/pexels-photo-6102369.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      alt: 'About me image',
    }
  },
  projects: [
    {
      title: '@DS.Crisp UI components',
      description: 'Using Storybook to develop shared understanding | by Bommu',
      targetURL: 'https://bommunagasai.github.io/ds.crisp/',
      img: {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/35886e125691923.611e42d37fa6a.png',
        alt: 'UI preview placeholder',
      },
      tags: [
        {
          theme: "red",
          label: "Storybook JS",
        },
        {
          theme: "blue",
          label: "React JS",
        },
        {
          theme: "yellow",
          label: "Typescript JS",
        },
      ],
    },
    {
      title: 'Pouch Notes App',
      description: 'Offline or PWA notes app based on browser db',
      targetURL: 'https://bommunagasai.github.io/pouch-notes-app/',
      img: {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8f6247132439445.61a8ddee542a6.jpg',
        alt: 'UI preview placeholder',
      },
      tags: [
        {
          theme: "green",
          label: "@ds.crisp",
        },
        {
          theme: "blue",
          label: "React JS",
        },
        {
          theme: "violet",
          label: "pouchdb",
        },
      ],
    },
    {
      title: 'React Snake',
      description: 'Pixel grid based snake game | React Native with multiple themes',
      targetURL: 'https://expo.dev/@bommu/react-snake/',
      img: {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/415384131672677.6199fe8822915.jpg',
        alt: 'UI preview placeholder',
      },
      tags: [
        {
          theme: "blue",
          label: "React Native",
        },
        {
          theme: "green",
          label: "styled-components/native",
        },
      ],
    },
  ],
  footer: `© ${new Date().getFullYear()}. All rights reserved.`
}

ReactDOM.render(
  <App content={CONTENT}/>,
  document.querySelector('#app'),
)