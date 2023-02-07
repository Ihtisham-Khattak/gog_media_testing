const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e:{
        baseUrl: "https://fans-help-players-athlete.web.app/"
    }
})