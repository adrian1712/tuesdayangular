namespace App {
  export class AboutController{
      static $inject = [];

// create out public variables that
//  will be usable out side of theis object in
// areas like our mark up/ template pages.
      public title;

// create our constructor method that will run
// once our ojbect is created. We willuse our
// cusntructor function to set up or configure
//  a new object
      constructor () {
        this.title = 'About Page'
      }
      public testMethod () {
        console.log ("hi i was clicked");
        this.title = 'Happy Birthday'
      }
  }
}
