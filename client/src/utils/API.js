import axios from "axios";

export default {
    getRecentBlogFeed: function() {
        return axios.get("/api/blog/getrecentfeed");
    },
    addNewPost: function(postData) {
        return axios.post("/api/blog/newpost");
    },
    deletePost: function(id) {
        return axios.delete("/api/blog/remove/" + id);
    }
}