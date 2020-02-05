import axios from "axios";

export default {
    getRecentBlogFeed: function() {
        return axios.get("/api/blog/");
    },
    addNewPost: function(postData) {
        return axios.post("/api/blog/", postData);
    },
    deletePost: function(id) {
        return axios.delete("/api/blog/remove/" + id);
    }
}