<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png" />
          Build a Bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="bg-red-500">yay</div>
    <div
      class="
        p-6
        max-w-sm
        mx-auto
        bg-white
        rounded-xl
        shadow-md
        flex
        items-center
        space-x-4
      "
    >
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <br />
    <div
      class="
        py-8
        px-8
        max-w-sm
        mx-auto
        bg-white
        rounded-xl
        shadow-md
        space-y-2
        sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6
      "
    >
      <img
        class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src="/img/erin-lindford.jpg"
        alt="Woman's Face"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Erin Lindford</p>
          <p class="text-gray-500 font-medium">Product Engineer</p>
        </div>
        <button
          class="
            px-4
            py-1
            text-sm text-purple-600
            font-semibold
            rounded-full
            border border-purple-200
            hover:text-white hover:bg-purple-600 hover:border-transparent
            focus:outline-none
            focus:ring-2
            focus:ring-purple-600
            focus:ring-offset-2
          "
        >
          Message
        </button>
      </div>
    </div>
    <h1 class="this-is-a-test">THIS IS A NEW UTILITY</h1>
    <RobotBuilder />
    <Search />
  </main>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/RobotBuilder.vue';
import Search from './search/Search.vue';

export default {
  name: 'App',
  components: {
    RobotBuilder,
    Search,
  },
};
</script>

<style>
body {
  background-color: #504845;
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
