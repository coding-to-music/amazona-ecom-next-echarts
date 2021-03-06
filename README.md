# amazona-ecom-next-echarts

# 🚀 Javascript full-stack 🚀

### React / Next / MongoDB / Stripe eCharts Amazon Storefront clone

https://github.com/coding-to-music/amazona-ecom-next-echarts

https://amazona-ecom-next-echarts.herokuapp.com

https://amazona-ecom-next-echarts.onrender.com

by Fahad Jabbar https://github.com/hereisfahad

https://github.com/hereisfahad/amazona-ecom

https://amazona-ecom-git-master-hereisfahad.vercel.app/

Environment Secrets:

```java
MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/amazona-ecom-next-echarts?retryWrites=true&w=majority"

JWT_SECRET=
NEXT_PUBLIC_JWT_SECRET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000

```

## Deploying to Render

This plugin will extract info from Heroku and put it into a Docker file.

```java
heroku plugins:install @renderinc/heroku-import
```

Output:

```java
warning ../../../package.json: No license field
warning ../../../../../../package.json: No license field
warning "eslint-config-oclif > eslint-config-xo-space@0.27.0" has incorrect peer dependency "eslint@>=7.20.0".
warning "eslint-config-oclif > eslint-plugin-mocha@9.0.0" has incorrect peer dependency "eslint@>=7.0.0".
warning "eslint-config-oclif > eslint-plugin-unicorn@36.0.0" has incorrect peer dependency "eslint@>=7.32.0".
warning "eslint-config-oclif > eslint-config-xo-space > eslint-config-xo@0.35.0" has incorrect peer dependency "eslint@>=7.20.0".
warning "eslint-config-oclif > eslint-plugin-unicorn > eslint-template-visitor@2.3.2" has incorrect peer dependency "eslint@>=7.0.0".
warning "eslint-config-oclif > eslint-plugin-unicorn > eslint-template-visitor > @babel/eslint-parser@7.16.3" has incorrect peer dependency "eslint@^7.5.0 || ^8.0.0".
Installing plugin @renderinc/heroku-import... installed v1.1.0
```

```java
heroku render:import --app amazona-ecom-next-echarts
```

Output:

```java

=== Gathering information about Heroku app
Verifying Heroku app exists and CLI is logged in... ✔️
Verifying app is using a single, official Heroku buildpack... ✔️
Getting stack image... heroku-20
Getting and translating plan... Heroku Free $0/mo --> Render Free $0/mo
Getting instance count... 1
Getting custom domains... 0 custom domain(s)
Getting environment variables... 2 environment variable(s)
Getting add-ons... 0 add-on(s)

? Select addons to import.

Create render.yaml file and Dockerfile.render? This will overwrite any existing files with the same name. (y/n): y
Generating render.yaml file... done
Generating Dockerfile.render... done

=== Environment variables excluded from render.yaml
The following environment variables were not included in the generated
  render.yaml file because they potentially contain secrets. You may need to
  manually add them to your service in the Render Dashboard.

- JWT_SECRET:

=== Follow these steps to complete import of service(s) and database(s) to Render
1. Add, commit, and push the generated render.yaml and Dockerfile.render to GitHub or GitLab.
2. Go to https://dashboard.render.com/select-repo?type=iac
3. Search for and select this repository.
4. Verify the plan showing the resources that Render will create, and
   then click 'Create New Resources'.
5. After the resources are deployed, you may need to manually add
   the above environment variables to your Web Service in the Render Dashboard.
   They were not included in the generated render.yaml because they potentially
   contain secrets.
```

## Getting Started

After installing deps, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Inspiration

Inspiration from https://github.com/basir/amazona.

## Deployed on Vercel

Checkout live version @ [Amazona Ecom](https://amazona-ecom-git-master.hereisfahad.vercel.app/)

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/amazona-ecom-next-echarts.git
git push -u origin main
```

## Heroku

```java
heroku create amazona-ecom-next-echarts
```

## Heroku MongoDB Environment Variables

```java
heroku config:set


heroku config:set JWT_SECRET="secret"

heroku config:set PUBLIC_URL="https://amazona-ecom-next-echarts.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```
