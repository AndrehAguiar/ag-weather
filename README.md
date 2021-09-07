# Criando projeto para consultar a previsão do tempo via API

##### Descrição

Neste Labs o objetivo é evoluir mais ainda os conhecimentos em Angular e desenvolvimento Web criando na prática um aplicativo de previsão do tempo utilizando Angular 12 como tecnologia front-end cosumindo uma API externa, o desafio foi replicar esse essa aplicação utilizando angular e consumindo essa api de terceiros.

[OpenWeather - Current Weather Data / One Call API](https://openweathermap.org/api)

Foram utilizados recursos do Redux para garantir a integridade dos dados, respeitar o ciclo de vida dos componentes e obter a melhor performance da aplicação, implementando de acordo com os conceitos de gestão local do estado, com a arquitetura de gerenciamento do estado e ciclo, como ilustra a imagem abaixo e descritos a seguir:

<img src="https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png">

- [Ações](https://ngrx.io/guide/store/actions) descrevem eventos exclusivos que são despachados de componentes e serviços.
- As mudanças de estado são tratadas por funções puras chamadas [redutores](https://ngrx.io/guide/store/reducers) que tomam o estado atual e a ação mais recente para calcular um novo estado.
- [Seletores](https://ngrx.io/guide/store/selectors) são funções puras usadas para selecionar, derivar e compor peças de estado.
- O estado é acessado com o `Store`, um observável de estado e um observador de ações.

**Nota:** Todos os `Actions` que são despachados dentro de um estado do aplicativo são sempre primeiro processados pelo `Reducers` antes de serem tratados pelo `Effects` do estado do aplicativo.

Ref.: https://ngrx.io/guide/store#diagram

---

## AgWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

**Angular**

<span>Front-End | Intermediário</span>

##### Especialista

<img  width="80px" src="https://avatars.githubusercontent.com/u/27514735?v=4" />

### João Victor Ghignatti

Lead Front-end Developer, TownSq

###### [Digital Innovation One](https://digitalinnovation.one/sign-up?ref=NL9EADWVZW)

---

<a href="https://www.linkedin.com/in/joaoghignatti/" target="_blank">
<img width="20px" src="https://image.flaticon.com/icons/png/512/174/174857.png"></a>
<span><a href="https://github.com/JGhignatti" target="_blank">
<img width="20px" src="https://image.flaticon.com/icons/png/512/25/25657.png"></a></span>

