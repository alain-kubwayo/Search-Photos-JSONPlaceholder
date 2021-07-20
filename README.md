# Search-Photos-JSONPlaceholder

In this project, a simple search form with one input field and a "Get Album Photos By Id" button was implemented using ReactJS. TailwindCSS was also used for styling to ensure that the photos retrieved from [JSON Placeholder](https://jsonplaceholder.typicode.com/), a free fake API for testing and prototyping, look presentable on viewers' screens. 

## Implemented Functionalities

The project implements the following functionalities:

* The user can enter an album id in the input field and up on clicking the "Get Album Photos By Id" button, the title and a thumbnail image of all the photos of the album by that id are displayed on the page
* To implement the above functionality, the following endpoint was used: https://jsonplaceholder.typicode.com/albums/{albumId}/photos 
* In the above endpoint, albumId is just a number between 1 and 100 inclusive. For instance https://jsonplaceholder.typicode.com/albums/1/photos will give you the photos of the album whose id is just 1 
* Input field was validated to ensure that the user only query the right id and the id within the range

## Technologies Used

* ReactJS
* TailwindCSS

## Deployment

This project was deployed on Heroku and you can click [here](https://react-search-photos.herokuapp.com/) to view it live and search photos by album id. I hope you enjoy!
