# À La Carte

This is a fork of [**Carte**](https://github.com/Wiredcraft/carte).
It is a simple universal [Jekyll](https://jekyllrb.com) based boilerplate to build your own API documentation. Unlike [Swagger](https://swagger.io/), it is inspired from, it will not try to do too much.

## Features
 * Just plain static documentation.
 * Flexible endpoint documentation by simple [Markdown](https://guides.github.com/features/mastering-markdown).
 * Supports different layouts at the same time.
 * Syntax highlighting.
 * Fancy design.

## Install
1. Install [Jekyll](https://jekyllrb.com)
2. Clone this repository.
3. Run `jekyll s` inside it.
4. Go to [http://localhost:4000](http://localhost:4000).

## Usage

### Adding a new API call

You can add a new API call by simply adding a new [Markdown](https://guides.github.com/features/mastering-markdown) file in the `_endpoints` folder. You can use numbers in the filename to control the order in which API calls are displayed in the interface.

Each API call can define a few values in its YAML header:

Variable | Mandatory | Default | Description
--- | --- | --- | ---
``title`` | Y | - | A short description of what that calls does.
``link`` | N | - | The URL for the API call, including potential parameters.
``type`` | N | - | Set it to `PUT`, `GET`, `POST`, `DELETE` or nothing (for parts of your documentation that do not relate to an actual API call).

A typical header:

```
---
link: '/stuff/:id'
title: 'Delete a thing'
type: 'DELETE'
---
```

We then describe the request and response (or whatever else you wish to talk about) in the body of our post. Check the placeholders present in the `_endpoints` folder to get an idea of what it can look like.

### Grouping calls

Adding a category to your YAML header will allows you to group methods in the navigation. It is particularly helpful as you start having a lot of methods and need to organize them. For example:

```
---
category: Stuff
link: '/stuff/:id'
title: 'Delete a thing'
type: 'DELETE'
---
```

### Change the design
The default UI is described by the following files:
```
.
├── css
│   ├── default // Imports.
│   │   ├── normalize.scss
│   │   ├── syntax-highlighting.scss
│   │   └── ui.scss
│   └── default.scss // Import instructions.
├── favicon.ico
├── index.html // Entry point.
├── js
│   └── default.js // UI logic.
└── _layouts
    └── default.html // Layout.
```
To use different designs at the same time, just create multiple entry points like `index.html` but with different `layout` directive in it.

## License
This project is free software under the terms of the GNU General Public License v3 as published by the Free Software Foundation.
It is distributed WITHOUT ANY WARRANTY (without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE).
For more details please see the LICENSE file or: http://www.gnu.org/licenses

## Credits
 * Favicon: https://www.favicon.cc/?action=icon&file_id=819961
 * Syntax highlighting stylesheet: https://github.com/taniarascia/startjekyll/blob/gh-pages/_sass/_syntax-highlighting.scss
 * [normalize.css v8.0.1](https://github.com/necolas/normalize.css)

## Contact
 * [Vivien Richter](mailto:vivien-richter@outlook.de)
 * [GitHub repository](https://github.com/vivi90/a-la-carte.git)
