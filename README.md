# axiora-web

Axiora is a SaaS that helps Latam e-commerce store owners to sell across different e-commerce marketplace and platforms, such as Shopify and Mercadolibre, synchronizing their sales & inventory to help them focus on their business needs, letting Axiora take care of the integration challenges.

The backend is (by default) a NodeJS REST API exposed on an AWS API Gateway that invokes the Lambdas. For processing notifications from external platforms (Mercadolibre, Shopify) I used AWS SNS, SQS, and Step Functions. The data from notifications is processed and saved on DynamoDB. All the resources were coded and deployed using Serverless framework.

The frontend is a SPA based in React, Redux, Tailwind CSS, and was deployed to AWS S3. Also used AWS CloudFront, Route 53, and SSL certificate.

Note: Code meets the business needs, however, there's a lot of room for improvement & refactoring.

https://axiora.co/

## Overview

To see the high level architecture of Axiora please visit [Axiora API repository](https://github.com/ricardocamacho/axiora-api)

The frontend is divided into two main folders: landing and spa.
- Landing is an old react template that I bought.
- SPA is the single page application made with React, Redux, Tailwind CSS and Vite.

Notes:
- Landing still contains the app code, when clicking "Ingresar" at the top right, the landing is going to redirect to https://axiora.co/app (which is technically still part of the landing code but is the app).
- SPA contains the app code only and it's accessible on https://app.axiora.co

TO-DO: on the Landing, remove the app code and React, keep a simple HTML with basic Typescript/Javascript, e.g. could be a simple [Astro](https://astro.build/) project. Is just a landing.

Useful commands on Landing:
```
npm run start
npm run build:dev
npm run build
```

Useful commands on SPA:
```
npm run dev
npm run build
```
