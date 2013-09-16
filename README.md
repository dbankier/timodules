timodules
=========

Handy Titanium SDK module commands

Install
-------

```
sudo npm install -g timodules
```


CLI Commamnds
-------------

### timodules

Returns the current modules in JSON format:

```
$ timodules
[{"name":"yy.androidalaw","platform":"android","version":"0.1"}]
``` 

### timodules set

Can be used to set the modules used in the application:

 * space to select/deselect
 * return to commit changes
 * ctrl-c to exit/abort

**NOTE** requires the titnanium cli to be installed (`sudo npm install -g titanium`)

![screenshot](http://github.com/dbankier/timodules/raw/master/screenshots/list.png)


Public API
----------

### getCurrent

`getCurrent(path, callback);`

* `path` to begin search for tiapp.xml
* `callback` returns to arguments
  1. `err` - error message
  2. `res` - object with:
    `current` - list of modules used in the current app ( {name, platform, version} ); 
    `path` - path where `tiapp.xml` was found

### list

`list(path, callback);`

* `path` to begin search for tiapp.xml
* `callback` returns to arguments
  1. `err` - error message
  2. `res` - object with:
    `current` - list of modules used in the current app ( {name, platform, version} ); 
    `path` - path where `tiapp.xml` was found
    `modules` - list of available modules  ( {name, platform, version, scope} );


