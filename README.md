<br/>
<br/>
<div align="center">
    <img src="logo.png" alt="Logo SaaVite" width="80" height="80">
  <h3 align="center">SaasVite</h3>
  <p align="center">[ 🔴 Not production ready yet ]</p>
</div>
<br/>

## 🤔 What is SaasVite ?

SaasVite is an open-source multi-tenant backend app built with AdonisJS and MongoDB to help developers kickstart the development of their _awesome_ B2B SaaS (Software As A Service) application.

This boilerplate is designed with two primary goals in mind:

> - Start with a fully-functional, relatively complex application. Then, modify it to become your own product.
> - Ship your app idea fast ⚡!

#### What is "B2B" ?

"B2B" means "business-to-business". In the simplest terms, a B2B product is a product where post-signup, a user can create an organization, invite others, and do something as a team.

B2B companies are fairly common - for example, over 40% of [Y Combinator-funded startups](https://www.ycombinator.com/companies) self-identify as B2B - but B2B-specific starter kits or boilerplates appear to be quite rare, hence this effort to build one with a relatively easy and developer friendly tech stack:
- [AdonisJS](https://adonisjs.com/): Laravel-like implementation for NodeJS.
- [MongoDB](https://mongodb.com/): an easy NoSQL database to quickly iterate and make changes as the business requirements evolves. Also check [Mongoose](https://mongoosejs.com/), the ODM used in SaasVite.

## 🚩 Roadmap

This project is still at its beginning, here is an approximate roadmap:

| Features                                                             | State (🔴🟡🟢) |
| -------------------------------------------------------------------- | --------------- |
|(Work In Progress...)| 🟡|

## ⚙ Prerequisites & Installation
1. Install prerequisites
    - Node.js >= 18
    ⚠️ Warning: Will not work with Node.js 19 due to bug in `set-cookie` implementation that was fixed in Node.js 20
    
2. Local development
	- Clone the project
	- Install, Run, Build
```shell
yarn install
yarn dev
yarn build
```
Using /.env.sample, you can set correct environment variables in your .env file and /start/env.ts


## 🤝 Contributing & Community

You can contribute in a number of ways. If you have questions or would like to discuss the future development of SaasVite, please join us on [JSBenin discord server](https://discord.gg/QedpWgYK) or create a GitHub issue. It's always a good idea to chat with us before embarking on a big pull request to ensure your developments align with the goals of the project. You call also contact this person: [@monlasan](https://twitter.com/monla_san).