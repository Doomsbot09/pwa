import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        userDetails: {
            firstname: "",
            lastname: "",
            grade: "",
            section: "",
            date: new Date().toISOString()
        },
        gameDetails: {
            name: "",
            score: "",
        }
    }),

    actions: {
        checkIfNewUser() {
            if (
                this.userDetails.firstname === "" &&
                this.userDetails.lastname === "" &&
                this.userDetails.grade === "" &&
                this.userDetails.section === ""
            ) {
                return true
            } else {
                return false
            }
        },
        saveUserDetails(data: any) {
            this.userDetails.firstname = data.firstname
            this.userDetails.lastname = data.lastname
            this.userDetails.grade = data.grade
            this.userDetails.section = data.section
        }
    },

    persist: {
        pick: ['userDetails', 'gameDetails']
    }
})