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

// Récupère les données de l'utilisateur, soit à partir des données mockées, soit de l'API
export const getUserData = async (userId, useMockData) => {
  if (useMockData) {
    const mockData = USER_MAIN_DATA.find(user => user.id.toString() === userId);
    return mockData ? { data: mockData } : null;
  } else {
    return await fetchData(`http://localhost:3000/user/${userId}`);
  }
};

// Récupère les données d'activité de l'utilisateur
export const getUserActivity = async (userId, useMockData) => {
  if (useMockData) {
    const mockData = USER_ACTIVITY.find(activity => activity.userId.toString() === userId);
    return mockData ? { data: mockData } : null;
  } else {
    return await fetchData(`http://localhost:3000/user/${userId}/activity`);
  }
};

// Récupère les données des sessions moyennes de l'utilisateur
export const getUserAverageSessions = async (userId, useMockData) => {
  if (useMockData) {
    const mockData = USER_AVERAGE_SESSIONS.find(session => session.userId.toString() === userId);
    return mockData ? { data: mockData } : null;
  } else {
    return await fetchData(`http://localhost:3000/user/${userId}/average-sessions`);
  }
};

// Récupère les données de performance de l'utilisateur
export const getUserPerformance = async (userId, useMockData) => {
  if (useMockData) {
    const mockData = USER_PERFORMANCE.find(performance => performance.userId.toString() === userId);
    return mockData ? { data: mockData } : null;
  } else {
    return await fetchData(`http://localhost:3000/user/${userId}/performance`);
  }
};
