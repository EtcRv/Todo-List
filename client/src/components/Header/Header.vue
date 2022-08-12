<template>
    <div class="header">
        <v-toolbar-title>
            <span @click="navigateTo({name: '/'})" class="home">ToDo List</span>
        </v-toolbar-title>


        <div class="header-left">
            <v-btn flat dark @click="navigateTo({name: 'login'})" v-if="!$store.state.isUserLoggedIn">Login</v-btn>

            <v-btn flat dark @click="navigateTo({name: 'register'})" v-if="!$store.state.isUserLoggedIn">Sign Up</v-btn>

            <v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">Log out</v-btn>

        </div>
    </div>
</template>
<script>
export default {
   name: 'Header',
   methods: {
    navigateTo(route) {
        this.$router.push(route.name)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
   }
}
</script>
<style scoped>
.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
}

.home {
 cursor: pointer;
 margin-right: 10px;
}

</style>
