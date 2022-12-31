<template>
  <div class="home">
    <div class="bar"></div>
    <header class="header">
      <img :src="user.avatar_url" alt="avatar" />
    </header>
    <main class="main">
      <h1>Hello.</h1>
      <h2>My name is {{ user.name || user.login }}.</h2>
      <p v-if="user.bio">{{ user.bio }}</p>
      <p>
        GitHub:
        <a :href="user.html_url" target="_blank" rel="noopener noreferrer">{{
          user.login
        }}</a>
      </p>
      <p v-if="user.blog">
        Blog:
        <a :href="user.blog" target="_blank" rel="noopener noreferrer">{{
          user.blog
        }}</a>
      </p>
    </main>
  </div>
</template>

<script>
import { getUser } from '@/api/user'

export default {
  name: 'HomeView',
  props: {
    username: {
      type: String,
      default: 'tlyboy'
    }
  },
  data() {
    return {
      user: {}
    }
  },
  async created() {
    const user = await getUser(this.username)

    this.user = user
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(231, 76, 60, 0.5),
    rgba(52, 152, 219, 0.5)
  );
  color: #fff;
  overflow: hidden;
}

.bar {
  width: 150vmax;
  height: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.header img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  box-shadow: 1px 1px 3px 1px rgba(52, 152, 219, 0.5);
  vertical-align: middle;
}

.main {
  padding: 1rem;
  text-shadow: 1px 1px 3px rgba(52, 152, 219, 0.5);
}

.main a {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}

.main a:hover {
  background-color: #3498db;
}
</style>
