# Frontend + Strapi Project

A web application built with React and TypeScript that consumes dynamic
content from Strapi and product data from an external API.

------------------------------------------------------------------------

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

``` bash
git clone https://github.com/Felipe-Millacura/Front-End-Technical-Assessment.git
cd backend or frontend
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Run the development server

``` bash
npm run dev
```

The application will be available at:

    http://localhost:5173

------------------------------------------------------------------------

## Tech Stack

### Frontend

-   React 19\
-   TypeScript\
-   Vite\
-   React Router DOM\
-   Axios\
-   TailwindCSS\
-   Ant Design

### Backend

-   Strapi

------------------------------------------------------------------------

## Technical Decisions

### React + TypeScript

React 19 with TypeScript was chosen to provide:

-   Static typing and better maintainability\
-   Improved developer experience\
-   Scalability for future growth

------------------------------------------------------------------------

### Vite

Vite was selected because of:

-   Extremely fast startup time\
-   Efficient HMR\
-   Minimal configuration\
-   Excellent React + TS integration

------------------------------------------------------------------------

### TailwindCSS + Ant Design

A strategic combination was used.

**TailwindCSS**

-   Rapid layout and spacing utilities\
-   High visual control\
-   More maintainable styling

**Ant Design**

-   Ready-to-use complex components\
-   Visual consistency\
-   Built-in accessibility

------------------------------------------------------------------------

### Axios

Used for API consumption due to:

-   Interceptors support\
-   Centralized error handling\
-   More control than native `fetch`

------------------------------------------------------------------------

## Frontend Structure

    src/
    ├── api/          # Endpoint calls
    ├── components/   # Reusable React components
    ├── pages/        # Main views
    ├── routes/       # Route definitions

### src/api

Contains the service layer responsible for consuming:

-   Strapi CMS\
-   External products API

**Goal:** separation of concerns.

------------------------------------------------------------------------

### src/components

Reusable React/TSX components such as:

-   Navbar\
-   Hero\
-   AboutMe\
-   Ability\
-   Footer

**Goal:** composition and reusability.

------------------------------------------------------------------------

### src/pages

Main application views:

-   `home` → main landing view\
-   `products` → product listing from external API

**Goal:** separate layout from routing logic.

------------------------------------------------------------------------

### src/routes

Centralized route definitions:

-   `/` → Home\
-   `/products` → Products

**Benefits:**

-   Scalability\
-   Maintainability\
-   Clear navigation structure

------------------------------------------------------------------------

## Backend (Strapi)

The CMS was implemented using Strapi to allow **dynamic and manageable
content**.

### Available Endpoints

#### Home

    home

**Fields:**

-   title\
-   description

**Usage:** main landing content.

------------------------------------------------------------------------

#### About Me

    aboutme

**Fields:**

-   title\
-   subtitle\
-   description\
-   image

**Usage:** personal presentation section.

------------------------------------------------------------------------

#### Abilities

    abilities

**Fields:**

-   name

**Usage:** technical skills listing.

------------------------------------------------------------------------

#### Product Page

Endpoint used for:

-   products view title

The **product list** itself is consumed from an **external API**.

------------------------------------------------------------------------

## AI Usage in the Project

AI (ChatGPT) was used as a development support tool for:

-   Generating initial component scaffolding\
-   Improving TypeScript typings\
-   Solving specific React and Vite questions\
-   Suggesting best practices\
-   Assisting with test writing

### Example Prompts Used

-   “How to set up the backend with Strapi and its basic use for creating endpoints?”\
-   “How to structure a scalable React + TypeScript project with Vite?”\
-   “What is the best way to create an Axios service layer in React?”\
-   “How to write API responses in TypeScript for a Strapi backend?”\
-   “What is the recommended folder structure for React applications?”\
-   “Refactor the design of this component for better expandability with Tailwind.”

------------------------------------------------------------------------

# Exercise 3: Architecture Reasoning (AI-assisted)

## Recommended Microfrontend Strategy

### Strategy: Module Federation + Domain-Driven Vertical Slices

**Core idea:** - Split the frontend by business domains (not by
technical layers) - Compose at runtime using Module Federation - Deploy
each microfrontend independently - Use a lightweight shell (container
app)

This approach balances team autonomy, runtime performance, and
operational simplicity.

------------------------------------------------------------------------

## High-Level Architecture

    Users
      ↓
    CDN / Edge
      ↓
    Shell (Host App)
      ↓
    ┌───────────────┬───────────────┬───────────────┐
    │ MFE: Catalog  │ MFE: Checkout │ MFE: Profile  │
    └───────────────┴───────────────┴───────────────┘
              ↓
         Shared Libraries

------------------------------------------------------------------------

## Why This Strategy

  ------------------------------------------------------------------------
  Approach               Pros           Cons           Verdict
  ---------------------- -------------- -------------- -------------------
  Iframes                Strong         Poor UX, slow  ❌ Not recommended
                         isolation                     

  Build-time integration Simple         No independent ❌ Limited
                                        deploys        

  Web Components only    Framework      Hard state     ⚠️ Niche
                         agnostic       sharing        

  Module Federation      Runtime        Some           ✅ Best balance
                         composition,   complexity     
                         fast, mature                  
  ------------------------------------------------------------------------

------------------------------------------------------------------------

## Key Architectural Principles

### 1. Vertical Domain Ownership

**Good split** - catalog-mfe - checkout-mfe - profile-mfe

**Bad split** - navbar-mfe - buttons-mfe - utils-mfe

Teams should own user journeys, not UI fragments.

------------------------------------------------------------------------

### 2. Shell (Host App) Responsibilities

**Should handle:** - Routing orchestration - Authentication bootstrap -
Layout framework - Global error boundaries - Shared dependency version
control

**Should NOT contain:** - Business logic - Domain features - Heavy UI
logic

------------------------------------------------------------------------

### 3. Runtime Integration via Module Federation

# Prompt - ChatGPT

Act as an expert in front-end architecture and DevOps. Provide a detailed recommendation for a scalable microfrontend architecture and explain the rationale behind the chosen strategy. 

Your tasks should include:\
- Explaining the chosen microfrontend strategy.\
- Designing the CI/CD process.\
- Considerations regarding scalability, maintainability, and performance.

``` js
new ModuleFederationPlugin({
  name: "shell",
  remotes: {
    catalog: "catalog@https://cdn.company.com/catalog/remoteEntry.js",
    checkout: "checkout@https://cdn.company.com/checkout/remoteEntry.js"
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true }
  }
})
```

------------------------------------------------------------------------

# CI/CD Pipeline Design

Each microfrontend has its own pipeline.

    Commit
      ↓
    Lint + Type Check
      ↓
    Unit Tests
      ↓
    Build
      ↓
    Contract Tests
      ↓
    Publish Artifact
      ↓
    Deploy to CDN

------------------------------------------------------------------------

## Stage Details

### Static Quality Gates

Include: - ESLint - TypeScript check - Formatting check - Bundle size
check

------------------------------------------------------------------------

### Testing Strategy

**Unit Tests** - Components - Hooks - Utilities

**Contract Tests** Ensure public interface compatibility between shell
and MFEs.

------------------------------------------------------------------------

### Build Best Practices

-   Deterministic builds
-   Content hashing
-   Environment-agnostic artifacts
-   Tree shaking enabled

Example output:

    /dist
      remoteEntry.[hash].js
      main.[hash].js

------------------------------------------------------------------------

### Artifact Storage

Recommended flow:

    CI → Artifact Registry → CDN

------------------------------------------------------------------------

## Deployment Strategy

### Independent Continuous Deployment

Each MFE deploys without coordinating with others.

------------------------------------------------------------------------

## Environment Promotion

    feature → dev → staging → production

Use: - Automated smoke tests - Synthetic monitoring - Progressive
rollout

------------------------------------------------------------------------

## Scalability Considerations

### Horizontal Team Scaling

Enables: - Independent teams - Parallel releases - Reduced merge
conflicts

**Critical guardrail:** strong design system.

------------------------------------------------------------------------

### Dependency Management

**Share only:** - react - react-dom - design system tokens

**Do NOT share:** - Business utilities - Feature services - Domain logic

------------------------------------------------------------------------

## Performance Guardrails

### Key Optimizations

**Prefetching**

    <link rel="prefetch" href="/catalog/remoteEntry.js">

**Edge Caching**

    Cache-Control: public, max-age=31536000, immutable

**Bundle Budgets (example)** - Initial JS \< 200 KB - Total MFE \< 500
KB

------------------------------------------------------------------------

## Maintainability Considerations

### Design System Structure

    @company/design-tokens
    @company/ui-components
    @company/eslint-config

------------------------------------------------------------------------

## 🔐 Security Considerations

-   Strict CSP
-   Subresource integrity (SRI)
-   Dependency scanning
-   Runtime isolation boundaries
-   Auth handled only in shell

------------------------------------------------------------------------

## 🧭 When This Architecture Is Ideal

-   Multiple autonomous teams
-   Large product surface
-   Need independent deployments
-   Organization expects fast scaling

------------------------------------------------------------------------

## 🚫 When NOT to Use Microfrontends

Avoid if: - Team \< 3 frontend devs - Early MVP stage - Low release
frequency - Tight performance budget - No DevOps maturity

------------------------------------------------------------------------

## 🏁 Final Recommendation

Use: - Module Federation - Domain-driven MFEs - Thin shell - Independent
CI/CD per MFE - Strong design system governance - Aggressive performance
monitoring

This setup balances team autonomy, deployment velocity, scalability, and
performance.

------------------------------------------------------------------------

## Exercise 4: AI-Assisted Code Refactoring

# Prompt - ChatGPT

Act as a front-end development expert and refactor this endpoint call into modern code using axios. 

function getUser(d){ return fetch("https://jsonplaceholder.typicode.com/users/"+d).then(x=>x.json()).then(j=>console .log(j)) }

Folder src/api/refactoring/getUser.tsx

In the src/pages/home.tsx view, this refactoring of the API call is made.
