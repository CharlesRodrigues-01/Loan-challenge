<h1>Desafio PicPay com Cypress</h1> 

> Exemplo de implementação de testes Web utilizando Cypress e Javascript

## Motivação das escolhas

Cypress é uma poderosa e versátil ferramenta para automação de testes. Pode ser usado uma variedade de tipos diferentes de testes automatizados como web e API.

A escolha desta ferramenta traz mais praticidade para a automação pois, de forma muito simples, é possível implementar e executar seus testes. Tirando complexidade desnecessária e tornando o processo mais intuitivo.

Fácil instalação, linguagem simples, documentação robusta, reports e logs personalizados para os testes.


## Cenários de testes implementados

Validação de link de centro de ajuda - Validação de redirecionamento para página de centro de ajuda ao cliente.

Validação de CPF inexistente - Validação de mensagem de erro ao inserir CPF incorreto no login.

Validação de fluxo de sucesso - Inserção de CPF correto e verificação de redirecionamento para página de código de autenticação.

## Setup para rodar os testes

Primeiro passo para rodar os testes com sucesso é garantir que possuímos todas as ferramentas necessárias para tal. São elas:

- NodeJs
- npm
- cypress

Para a instalação do NodeJs basta seguir a documentação disponibilizada logo abaixo.

Agora vamos seguir com os passos para execução do projeto:

- Clone o projeto do github e abra-o em uma IDE de sua escolha
- Crie um arquivo denominado cypress.env.json com a seguinte estrutura:
    
```sh
{
  "validCpf": "0000000000",
  "invalidCpf": "11111111111"
}
```
Insira um cpf válido para os testes de sucesso e um inválido para os cenários alternativos.

Para rodar o projeto e criar as evidências de testes (vídeo) execute o seguinte comando:

```sh
npm run cypress_run
```
Para rodar o projeto e visualizar o fluxo web execute o seguinte comando:

```sh
npm run cypress_open
```
## Documentação

- [NodeJs](https://nodejs.org/docs/latest/api/)
- [npm](https://docs.npmjs.com/)
- [cypress](https://docs.cypress.io/app/get-started/why-cypress)