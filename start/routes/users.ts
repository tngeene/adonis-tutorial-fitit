import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // registration and login logic
  Route.post('register', 'Users/AuthController.register').as('register')
  Route.post('login', 'Users/AuthController.login').as('login')
  Route.post('logout', 'Users/AuthController.logout').as('logout')

  // verification logic
  // Route.post('/verify-email', 'users/EmailVerificationsController.index').as('verifyAccount')
  Route.get('/verify-email/:email', 'users/EmailVerificationsController.confirm').as('verifyEmail')
}).prefix('api/v1/users/')
