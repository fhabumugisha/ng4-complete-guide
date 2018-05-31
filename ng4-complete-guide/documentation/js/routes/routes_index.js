var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"authRoutes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"signup","component":"SignupComponent"},{"path":"signin","component":"SigninComponent"}],"kind":"module"},{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"HomeComponent"},{"path":"recipes","loadChildren":"./recipes/recipes.module#RecipesModule","children":[{"kind":"module","children":[{"name":"recipesRoutes","filename":"src/app/recipes/recipes-routing.module.ts","module":"RecipesRoutingModule","children":[{"path":"","component":"RecipesComponent","children":[{"path":"","component":"RecipeStartComponent"},{"path":"new","component":"RecipeEditComponent","canActivate":["AuthGuard"]},{"path":":id","component":"RecipeDetailComponent"},{"path":":id/edit","component":"RecipeEditComponent","canActivate":["AuthGuard"]}]}],"kind":"module"}],"module":"RecipesModule"}]},{"path":"shopping-list","component":"ShoppingListComponent"}],"kind":"module"}]}
