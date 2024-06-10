<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link class="navbar-brand" :to="{ name: 'main' }">Home</router-link>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 align-items-center">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'search' }">Search</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
          </li>
          <li class="nav-item" v-if="!$root.store.username">
            Hello Guest: <router-link class="nav-link d-inline" :to="{ name: 'register' }">Register</router-link>
          </li>
          <li class="nav-item" v-if="!$root.store.username">
            <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
          </li>
          <li class="nav-item" v-if="$root.store.username">
            <b-dropdown text="Personal">
              <b-dropdown-item href="#">Favorites</b-dropdown-item>
              <b-dropdown-item href="#">My Recipes</b-dropdown-item>
              <b-dropdown-item href="#">My Family's Recipes</b-dropdown-item>
            </b-dropdown>
          </li>
          <li class="nav-item" v-if="$root.store.username">
            <router-link class="nav-link" :to="{ name: 'newRecipe' }">New Recipe</router-link>
          </li>
          <li class="nav-item" v-if="$root.store.username">
            {{ $root.store.username }}:
          </li>
          <li class="nav-item" v-if="$root.store.username">
            <button class="btn btn-link nav-link" @click="Logout">Logout</button>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { BDropdown, BDropdownItem } from 'bootstrap-vue';

export default {
  name: "App",
  components: {
    BDropdown,
    BDropdownItem
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

.nav-item {
  margin: 0.9%;
  font-weight: bold;
  color: #8e9498;
  white-space: nowrap;
}

.nav-link {
  color: #898d90;
}

.nav-link.router-link-exact-active {
  color: #898d90;
}

.d-inline {
  display: inline;
}

.align-items-center {
  align-items: center !important;
}
</style>
