# Flock Landing FE

This repo contains the frontend for the Flock onboarding flow.

# Run locally

1. Copy the `flock-landing-fe .env dev/staging` from 1password to the root directory and rename to `.env.development`

You will also have to run the flock-gql-server and Go server locally. If you are having trouble, refer to https://www.notion.so/flockhomes/Engineering-Runbook-b985e862d1054ef2a762b89b16e1bb88?p=5a73d1c4f4ab42ae89d6fe4fadeb1c58&showMoveTo=true

2. Install and build dependencies

```sh
yarn
yarn build-deps
```

3. Run the frontend

```sh
yarn start
```

Note: When you're trying to run locally in conjunction with the go application, be sure that `GATSBY_APOLLO_URL` is pointed at the local Apollo server (i.e. `http://localhost:4000/`)

4. Access the website by going to `http://localhost:8000`

# Testing

1. `yarn test` will run jest unit tests within this repo.
2. `yarn test:e2e` will run the end to end tests. Check the `e2e-tests` package to point the tests to the local environment

# Deploying

For additional deployment configuration, view [this Notion Doc](https://www.notion.so/Amplify-Deployment-Pipeline-5571812ff63d4aea8d9b992cc0f500d0)

## Deploying to integration

If you need to modify any environment variables, add them in the [Amplify Console](https://us-east-2.console.aws.amazon.com/amplify/home?region=us-east-2#/dq4c5757puv7o/settings/variables). Note that environment variables must be prefixed with `GATSBY_` to be available to the browser.

To deploy to integration, force push your branch over the `landing-integration` branch:

```
git push origin -f <your-branch-name>:landing-integration
```

Changes will appear at [integration.flockhomes.com](integration.flockhomes.com).

## Deploying to production
Visit the [Amplify Console for this app](https://us-east-2.console.aws.amazon.com/amplify/home?region=us-east-2#/d4wpxsjua67vc/master) and press `Redeploy this version` to deploy the `master` branch version of this app.

<!-- force deploy -->