import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../data/data.js'; 

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return null;
  }
};

export const getUserData = async (userId, useMockData) => {
  if (useMockData) {
    return  USER_MAIN_DATA.find(user => user.id.toString() === userId);
  } else {
    return await fetchData(`http://localhost:3000/user/${userId}`);
  }
};

export const getUserActivity = async (userId, useMockData) => {
  if (useMockData) {
    console.log(`mockData ${useMockData}`)
    return USER_ACTIVITY.find(activity => activity.userId.toString() === userId);
  } else {
    console.log(`mockData ${useMockData}`)
    return await fetchData(`http://localhost:3000/user/${userId}/activity`);
  }
};

export const getUserAverageSessions = async (userId, useMockData) => {
  if (useMockData) {
    return USER_AVERAGE_SESSIONS.find(session => session.userId.toString() === userId);
  } else {
    return await fetchData(`http://localhost:3000/user/${userId}/average-sessions`);
  }
};

export const getUserPerformance = async (userId, useMockData) => {
  if (useMockData) {
    return USER_PERFORMANCE.find(performance => performance.userId.toString() === userId);
  } else {
    return await fetchData(`http://localhost:3000/user/${userId}/performance`);
  }
};

