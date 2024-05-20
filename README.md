This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 'Search' Pages

Click the search icon in the navbar to go to the 'search by theater' page.
Hover over the search icon to get links for the 'search by theater' and 'search by timeslot' pages.

Empty searches can be made, click the search button to display the search results.

## Packages used:

* Chakra UI
* Redux
* [react-datepicker](https://www.npmjs.com/package/react-datepicker)

## Movie API endpoints used

* New Movies
* TimeSlot
* Specific Movie Theater

## Movie API usage limit error

The MovieGrid component (app/components/MovieGrid.jsx) displays sample data if an endpoint returns a usage limit error.
