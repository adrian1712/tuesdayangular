namespace app {
  let app = angular.module ('App', ['ui.router']);

  app.config ([
    '$stateProvider',
    ($stateProvider: angular.ui.IStateProvider) => {
      $stateProvider
        .state ('home', {
          url: '/',
          // template: 'this is my home page <p>title value: {{title}}</p>',
          templateUrl: 'templates/home.html',
          controller: App.HomeController,
          controllerAs: 'homeController'
        })
        ;
      $stateProvider
          .state ('about', {
            url: '/about',
            // template: 'this is about page'
            templateUrl: 'templates/about.html',
            controller: App.AboutController,
            controllerAs: 'aboutController'
          })
        ;
      $stateProvider
        .state ('contact', {
          url: '/contact',
          // template: 'this is my contact page'
          templateUrl: 'templates/contact.html',
          controller: App.ContactController,
          controllerAs: 'contactController'
        })
        ;
        $stateProvider
          .state ('faq', {
            url: '/faq',
            // template: 'this is my contact page'
            templateUrl: 'templates/faq.html',
            controller: App.FaqController,
            controllerAs: 'faqController'
          })
          ;
    }
  ]);
}
