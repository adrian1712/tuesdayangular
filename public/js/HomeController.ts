namespace App {
  export class HomeController{
      static $inject = [];
      public title;
      constructor () {
        this.title = 'Home page'
      }
      public testMethod () {
        console.log ("hi fun clicked");
        this.title = 'Practice'
        }
      }
    }
