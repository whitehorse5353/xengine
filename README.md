# Xperience Engine
a simple poc on react flux

## Installation

To install and work within the xengine. Fork this repository and once you clone it locally run the following.

### Global packages to be installed
```js
// Windows
npm install sails -g
npm install browserify -g

// OSX
$ sudo npm install sails -g
$ sudo npm install browserify -g

```

### Application packages to be installed

```js
// Windows
C:\user\xengine> npm install
C:\user\xengine\reactview> npm install
C:\user\xengine\pagepublisher> npm install

// OSX
$ sudo npm install

in all three folders /xengine, /reactview, /pagepublisher
```

Jump into application root(xengine) directory reactview and pagepublisher to run npm install

### Start server :
```js
node app
```

Application will up and running in http://localhost:1337

### Create new react-flux component

```js
sails generate component componentName
```

To create a new component application server to be up and running

### Component factory

```
+ component-factory
  + componentname
    + scripts
      + actions
        - componentname.Action.js
      + dispatcher
        - componentname.Dispatcher.js
      + stores
        - componentname.Stores.js
      + components
        - componentname.Component.js

    + styles
      - name.scss
    index.html
```
