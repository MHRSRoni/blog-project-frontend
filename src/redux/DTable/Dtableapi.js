
import axios from "../../utilities/axiosInstance";


// get blog data for user dashboard

export const getPostsByUId = async (userId) => {

  
    const response = await axios.get(
      `/post/read?user=${userId}`
    );

    const result = response.data.data.resultPosts;
    return result;
  };


// delete blog by slug

export const deletePostBySlug = async (slugData) => {


    console.log(slugData+"dtable api >>>>>>>>>.");
  
    const response = await axios.delete(
      `/post/delete/${slugData}`
    );

    const result = response.data.data.resultPosts;
    return result;
  };