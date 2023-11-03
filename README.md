# udemy-angular-course

## 1. Getting Started

> What is angular? \
> Its a javascript framework which allows you to create single page applications (SPAs) \
> Page never reloads - it make changes to currently loaded pages

-   Angular Versioning -
    -   AngularJS (Angular 1) (Very Different) (Can ignore)
    -   Angular 2
    -   Angular 4 (Angular 3 was skipped)
    -   Angular 10, 11, 12....
    -   (They release major version every 6 months but all of them backwards compatible except Angular1)

> Node is used to run the Angular app
> npm is used to manage different dependencies in an Angular project

-   Install Angular Globally

```
$ sudo npm install -g @angular/cli@latest
```

-   First Angular App

```
$ ng new 01-my-first-app --strict false
$ cd 01-my-first-app
$ ng serve
```

## 2. The Basics

### Components

-   Adding Bootstrap to Angular App

```
$ cd 02-angular-basics
$ npm install --save bootstrap

Go to file "angular.json" :
02-angular-basics.architect.build.options.styles ->
add "node_modules/bootstrap/dist/css/bootstrap.min.css"
```

-   How and Angular App Gets Loaded And Started

> index.html - has -> \
> different scripts tags embedded - starts -> \
> main.ts - bootstrap -> \
> app.module.ts - analyzes -> \
> app.component.ts - reads -> \
> app.component.html - knows -> \
> app-root

-   Components are important

    1.  app-root : main component where it all starts
    2.  angular app is built with component
    3.  each component has -
        -   template , html code
        -   styling
        -   business logic

-   Creating a new Component
-   Understanding role of App Module and Component
-   Using Custom Components
-   Creating components with CLI and nesting components

```
$ cd 02-angular-basics
$ ng generate component servers OR $ ng g c servers
```

-   Working with component templates
    1. either template pr templateUrl needs to be present in component decorator
    2. called inline or external templates
-   Working with component styles
    1. inline styles - styles : in component decorator
    2. external styles - styleUrls : file names of the css files
    3. inline styles > external styles
-   Fully understanding the component selector
    1. attribute style - selector : "\[name\]"
    2. class selector - selector : ".name"
    3. cannot use id selector and pseudo-selectors (like :hover etc.)
-   Practicing Components Exercise

### Data Binding

-   What is data-binding?
    1. communication between typescript code and html templates and other way around
-   String Interpolation : {{}}
-   Property Binding : []
-   Property Binding Vs String Interpolation
    1. output something - use string interpolation
    2. change some property - use property binding
-   Event binding : ()
-   Passing and Using Data with Event Bindings : $event
-   Two Way Data Binding : [(ngModel)]
-   Combining all forms of data-binding

### Understanding Directives

-   Directives instructions in the DOM for angular
-   Components are directives with templates
-   Built in Directives
    1. \*ngIf - expression
    2. ngStyle - use property binding
    3. ngClass - use property binding
    4. \*ngFor - let <item> of <items>; let i = index

( \* in the beginning means - structural directives that changes DOM )

## 3. Course Project - The Basics

About : Recipe Book and Shopping List App

### Planning the app

![Course Project App Planning](images/Course_Project_App_Planning.jpg)

### Creating the new Project

```
$ ng new 99-course-project-app --no-strict --routing false --standalone false

$ 99-course-project-app

$ npm install --save bootstrap@3

Put the Path in angular.json under :
  projects >  99-course-project-app > architect > options > styles

"node_modules/bootstrap/dist/css/bootstrap.min.css"
```

### Creating the Components

```
$ ng g c components/header --skip-tests
$ ng g c components/recipes --skip-tests
$ ng g c components/recipes/recipe-list --skip-tests
$ ng g c components/recipes/recipe-detail --skip-tests
$ ng g c components/recipes/recipe-list/recipe-item --skip-tests
$ ng g c components/shopping-list --skip-tests
$ ng g c components/shopping-list/shopping-edit --skip-tests
```

### Using and Arranging The Component

### Components Coding

1. Header Component
2. Recipe Model
3. Adding Recipes Content
4. List of Recipes
5. Recipe Details
6. Shopping List Features
7. Ingredients Model
8. Shopping List Edit

## 4. Debugging

-   Read and use the Error Messages to fixe compilation bugs
-   To Debug js files have map to the ts files
-   They exists in developer tools > sources > webpack:// > "." > src > same folder structure as your project

## 5. Components and Data Bindings

### Splitting App into components

### Property and Event Binding

-   Custom property binding : inside the component

    -   @Input() decorator : to allow parent component to set the property of the child component
    -   @Input('<property-alias>') : <property-name> will be available to parent component to bind

-   Custom property binding : from the component
    -   EventEmitter<data-type>() : to create custom event properties
    -   @Output() decorator : to send the event outside the component (to the parent specifically)

### View Encapsulation

-   Angular adds a unique id to each component element so that it can be differentiated from others and can be selected separately from the CSS file
-   encapsulation: ViewEncapsulation - .Emulated, .None, ,.ShadowDom

### Using Local References in Templates

-   <input type="text" class="form-control" [(ngModel)]="newServerName" /> change to -
    <input type="text" class="form-control" #serverNameInput/>
-   serverNameInput is the whole HTMLInputElement with all the properties

### Getting Access to Component Templates from Typescript

-   Add local reference to the element
-   @ViewChild(<local-reference>) serverContentInput: ElementRef; - you get ref to that element from the template

### Projecting Content With ngContent

-   ngContent - hook to mark a place in your component to add the data between the selector tags where the component was used

### Understanding Component Lifecycle

-   Lifecycle Hooks : The stages of angular creating a new component

    1.  ngOnChanges(changes: SimpleChanges)
        -   can be executed multiple times : on comp init, bound property change @Input decorators
    2.  ngOnInit
        -   after basic init, component is not added to the DOm yet
    3.  onDoCheck
        -   every change detection run (timer, button click etc.)
    4.  ngAfterContentInit
        -   after content ng-content has been rendered
    5.  ngAfterContentChecked
        -   every time ng-content has been checked
    6.  ngAfterViewInit
        -   after components view and child views has been initialized
    7.  ngAfterViewChecked
        -   every time the view and the child view have been checked
    8.  ngOnDestroy
        -   before the component object is getting destroyed

    ![Angular Component Lifecycle hooks](images/ng-lifecycle-hooks.png)

### LifeCycle Hooks and template Access

-   @ViewChild and @ContentChild will not have any values till ngAfterViewInit and ngAfterContentInit is called respectively

## 6. Course Projects - Components and Data Bindings

TODO

## 7. Directives Deep Dive

### Understanding Directives

-   types

    1. Attribute - only change properties of the element applied
    2. Structural - changes structure of the element in the dom applied

-   ngIf and ngFor (Structural)
-   ngClass and ngStyle (Attribute)

### Custom Attribute Directive

-   @Directive decorator - it needs selector : [] for attribute
-   using ElementReference :
    -   constructor(private elementRef: ElementRef) {} : injection of the element on which the directive is used ; its reference
    -   it will now be accessible in the component class
    -   `ng g d directives/better-highlight --skip-tests` : to create new highlight
-   using Renderer2 :
    -   constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
    -   this.renderer.setStyle()
-   @HostListener decorator:
    -   to listen to the dom events on the element
-   @HostBinding
    -   used to bind an element property to your class property
-   Providing Inputs to the directives
    -   we can use custom property binding or event binding on the directives to send data to it

### Custom Structural Directive

-   <ng-template [ngIf]="onlyOdd"> can be used to replicate \*ngIf directive
-   This can be used to set up our own structural directive
-   @Input() set appUnless(condition: boolean) : to define the directive function
-   constructor(
    private templateRef: TemplateRef<any>, : getting the element we want to change
    private viewContainerRef: ViewContainerRef : getting the place we want to add or remove the element of the DOM
    )

### ngSwitch directive

-   works as a switch case statement in java
-   [ngSwitch]="<variable-name>" for the main element to provide the variable name
-   \*ngSwitchCase="<variable-value>"
-   \*ngSwitchDefault = default case if value is not in the other cases

## 8. Course Project - Directives

TODO

## 9. Using Services and Dependency Injection

### Services

-   Used to centralize the functionality that can be shared by all the components
-   How to create a logging service - its just a simple typescript class

### Dependency Injections

-   Using Providers
    -   add class entry to the component decorators under providers array
    -   add a variable to the constructor of the service type
-   Using Angular's inject function
    -   inside constructor use thi.loggingService = inject(LoggingService)
-   Hierarchical Injector
    If we added service providers to the following :
    -   AppModule - service instance is available same instance application wide
    -   AppComponent - service instance is available for all components but not service
    -   Any Other Component - the same instance is available for components and all its child component
-   @Injectable() decorator : added to the services where we wanna inject other services
-   Also make sure that you add providers on AppModule
-   You can also use "providedIn: 'root'" property on Injectable decorator

## 10. Course Project - Services and Dependency Injection

TODO

## 11. Changing Pages with Routing

## 12. Course Project - Routing

## 13. Understanding Observables

## 14. Course Project - Observables

## 15. Handling Forms in Angular Apps

## 16. Course Project - Forms

## 17. Using Pipes to Transform Output

## 18. Making HTTP requests

## 19. Course Project - HTTP

## 20. Authentication & Route Protection in Angular

## 21. Dynamic Components

## 22. Angular Modules and Optimizing Angular Apps

## 23. Deploying an Angular App

## 24. Standalone Components

## 25. Angular Signals

## 26. Bonus: Using NgRx For State Management

## 27. Bonus: Angular Universal

## 28. Angular Animations

## 29. Adding Offline Capabilities with Service Workers

## 30. A Basic Introduction to Unit Testing Angular Apps

## 31. Angular as a Platform & Closer Look at the CLI

## 32. Angular Changes and New Features

## 33. Course Roundup

## 34. Bonus: TypeScript Introduction (for Angular2 Usage)
