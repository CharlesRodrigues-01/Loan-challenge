const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://meus-emprestimos.picpay.com'
  },
});
