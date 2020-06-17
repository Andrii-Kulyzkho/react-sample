const api = 'https://sample.com/v1/api';
const devApi = 'http://localhost:3000';

const prodConfig = {
  dashboardAPI: `${api}/people/dashboard`,
  peopleAPI: `${api}/people`,
  // searchAPI: `${api}/search/`,
  profileAPI: `${api}/profile/`,
  skillsAPI: `${api}/profile/skills/`,
  skillsPatchAPI: `${api}/profile/skills`,
  imageAPI: 'http://192.168.2.222:8099/img/',
  aboutAPI: `${api}/profile/about`,
};

const devConfig = {
  dashboardAPI: `${devApi}/people/dashboard?orgs=&regions=&locations=&page=1`,
  peopleAPI: `${devApi}/people`,
  profileAPI: `${devApi}/profile/`,
  skillsAPI: `${devApi}/profile/skills/`,
  skillsPatchAPI: `${devApi}/profile/skills`,
  imageAPI: 'http://192.168.2.222:8099/img/',
  aboutAPI: `${devApi}/profile/about`,
};

const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

export default config;
