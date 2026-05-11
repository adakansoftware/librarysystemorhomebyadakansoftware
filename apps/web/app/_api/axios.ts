import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || process.env.BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use((response) => {
  const body = response.data;

  if (body && typeof body === "object" && "success" in body) {
    response.data = body.success ? body.data : body;
  }

  return response;
});

export default api;
