# Upply Frontend Evaluation

## Installation
- `git clone https://github.com/HenriFidesio/test-nextjs.git`
- `cd test-nextjs`
- `git checkout develop`
- `npm install` or `yarn`

## Run development env
- `npm run dev` or `yarn dev`
- Your app should be avaiable at *localhost:3000*

## Dependencies
- NextJS https://nextjs.org
- React Dropzone https://github.com/react-dropzone/react-dropzone

## Note
- Look like https://fhirtest.uhn.ca/baseDstu3 doesn't always update their Count, so some time the total resource number won't change. It has nothing to do with the code: the request get is chained after every upload call (with await keyword) 
- There is no redux-saga: in my opinion this would be overkill, and it would take me more than 3h to integrate redux-saga, since I have not work with this techo for a quite.
- No style-inline: well, I didn't notice the bonus untill the very end ;)
