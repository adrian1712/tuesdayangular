namespace App {
  export class ContactController{
      static $inject = [];
      public title;
      constructor () {
        this.title = 'Contact page'
      }
      public testMethod () {
        console.log ("hi clicked");
        this.title = 'Funny Stuff'
        }
      }
    }
