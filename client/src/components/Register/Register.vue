<template>
    <v-card elevation="2" >
        <v-card-title>{{title}}</v-card-title>
        <form class="form">
            <v-text-field
                v-model="name"
                label="Name"
                required
            ></v-text-field>
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

            <v-btn
                class="mr-4"
                @click="register"
            >
            submit
            </v-btn>
            
        </form>
    </v-card>
</template>

<script>
import AuthenticationServices from '../../services/AuthenticationServices'

export default {
    name: 'Register',
    data() {
        return {
            title: 'Register',
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async register() {
            const response = await AuthenticationServices.register({
                name: this.name,
                email: this.email,
                password: this.password
            })
            console.log("response: ", response)
            this.$router.push("/")

        }
    }
    
}
</script>

<style scoped>
.form {
    padding: 20px;
}
</style>