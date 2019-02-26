# react-tabs

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Tabs component.

## Usage

```javascript

import { Tabs } from  "@crpt/react-tabs";


<Tabs tabs={[{id: 1, title: "Tab 1"}, {id: 2, title: "Tab 2"}]} selectedId={2} onSelect{val => console.log(val)}  />

```

| PropName | Description | Example |
|---|---|---|
| tabs: Array (Required) | Tabs configuration. | <Tabs tabs={[{id: 1, title: "Tab 1"}, {id: 2, title: "Tab 2"}]} /> |
| selectedId: Number | ID of selected tab. | <Tabs tabs={[{id: 1, title: "Tab 1"}, {id: 2, title: "Tab 2"}]} selectedId={2} /> |
| onSelect: Function | Callback for tab select event. | <Tabs tabs={[{id: 1, title: "Tab 1"}, {id: 2, title: "Tab 2"}]} onSelect{val => console.log(val)} /> |
| fillWidth: Boolean | Fills width of container. | <Tabs fillWidth /> |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
