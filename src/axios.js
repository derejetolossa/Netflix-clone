import axios from "axios";

const instance = axios.create({
baseURL: "https://api.themoviedb.org/3",
});
// instance.get("/movie/top_rated");

export default instance;
// https://www.youtube.com/watch?v=zWInNnE8Acw 
// paused at 25:08/2:17:24