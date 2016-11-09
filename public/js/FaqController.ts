namespace App {
  export class FaqController{
      static $inject = [];
      public title;
      constructor () {
        this.title = 'FAQ page'
      }
      public testMethod () {
        console.log ("hi clicked");
        this.title = 'Awnsers Stuff'
        }
      }
    }
