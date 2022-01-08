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
    summary: "I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.",
    img: {
      src: 'https://images.pexels.com/photos/6102369/pexels-photo-6102369.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      alt: 'About me image',
    }
  },
  projects: [
    {
      title: '@DS.Crisp UI components',
      description: 'Using Storybook to develop shared understanding | by Bommu',
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
      title: 'Widget based dashboards',
      description: 'NA',
      img: {
        src: 'https://cdn.dribbble.com/users/427857/screenshots/10143929/media/8b4534bf2923723580d3f22d451ecb3a.jpg?compress=1&resize=400x300',
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
      ],
    },
  ],
  footer: `© ${new Date().getFullYear()}. All rights reserved.`
}

ReactDOM.render(
  <App content={CONTENT}/>,
  document.querySelector('#app'),
)