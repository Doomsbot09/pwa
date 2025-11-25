export default () => ({
    saveGameScore(data) {
        return useFetch("/api/users", {
            method: "POST",
            body: data
        })
    },
    getScores() {
        return useFetch("/api/users", {
            method: "GET"
        })
    }
})