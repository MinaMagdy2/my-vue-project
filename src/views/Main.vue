<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>Posts</h2>

    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
        <button @click="deletePost(post.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      token: "YOUR_TOKEN_HERE",
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
    .then(res => {
      this.posts = res.data.slice(0, 5);
    })
    .catch(err => {
      console.error("Error fetching posts", err);
    });
  },

  methods: {
    deletePost(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then(() => {
        this.posts = this.posts.filter(p => p.id !== id);
      })
      .catch(err => {
        console.error("Error deleting post", err);
      });
    }
  }
};
</script>
axios.post("http://your-api.com/api/login", {
  email: this.email,
  password: this.password
})
.then(response => {
  const token = response.data.token;
  localStorage.setItem("token", token); 
});
