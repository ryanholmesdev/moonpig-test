Moonpig - Front-end submission by Ryan Holmes.

I hope you don't mind me building this in Next.js. I used it because it was on your job spec.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I also used [Bulma](https://bulma.io/) css framwork, no particular reason just thought I would try this one out as I havent touched this before.

## Getting Started

```bash
npm install
npm run dev
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If I had some more time I would:

* Have the Api calls in services instead for more organisation.
* Implement more testing coverage end to end.
* Possibly implement styled components, to allow them to be more independent.
* Add additional features such as pagination or filtering on categories etc.

I felt that implementing pagination was a bit pointless too add since the API returned all the information at once anyway. But I did use Next.js built in image loader to only load the images once in the view. To avoid loads of image requests.

Thank you for taking a look

Ryan

