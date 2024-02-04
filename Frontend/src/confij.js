const API_BASE_URL = "http://localhost:5000";

const CONFIG_OBJ = {
  headers: {
    'Authorization': `Bearer${localStorage.getItem("jwt")}`,
    'Content-Type': 'application/json',
  }
};

export { API_BASE_URL, CONFIG_OBJ };
