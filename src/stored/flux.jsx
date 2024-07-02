const fetchPeople = async () => {
  try {
    const response = await fetch('https://www.swapi.tech/api/planets?page=4&limit=10/');
    if (!response.ok) {
      throw new Error('Failed to fetch people data');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching people:', error);
    throw error;
  }
};

const fetchVehicles = async () => {
  try {
    const response = await fetch('https://www.swapi.tech/api/vehicles/');
    if (!response.ok) {
      throw new Error('Failed to fetch vehicles data');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};
const fetchPlanets = async () => {
  try {
    const response = await fetch('https://www.swapi.tech/api/planets?page=2&limit=10');
    if (!response.ok) {
      throw new Error('Failed to fetch planets data');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching planets:', error);
    throw error;
  }
};


const fetchPerson = async (id) => {
  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch person data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching person:', error);
    throw error;
  }
};

const fetchVehicle = async (id) => {
  try {
    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch vehicle data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    throw error;
  }
};

const fetchPlanet = async (id) => {
  try {
    const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch planet data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching planet:', error);
    throw error;
  }
};

export { fetchPeople, fetchVehicles, fetchPlanets, fetchPerson, fetchVehicle, fetchPlanet };
