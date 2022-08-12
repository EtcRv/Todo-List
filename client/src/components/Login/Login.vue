<template>
    <v-card elevation="2" >
        <v-card-title>{{title}}</v-card-title>
        <form class="form">
            <v-text-field
                v-model="email"
                label="E-mail"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
                required
                type="password"
            ></v-text-field>

            <p v-if="error">{{error}}</p>
            <v-space></v-space>
            <v-btn
                class="mr-4"
                @click="login"
            >
            submit
            </v-btn>
            
        </form>
    </v-card>
</template>

<script>
import AuthenticationServices from '../../services/AuthenticationServices'

export default {
    name: 'Login',
    data() {
        return {
            title: 'Login',
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login() {
            try {
                const response = await AuthenticationServices.login({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                this.$router.push("/")
            }catch(err) {
                this.error = err.response.data.error
            }
        }
    }
    
}
</script>

<style scoped>
.form {
    padding: 20px;
}
</style>