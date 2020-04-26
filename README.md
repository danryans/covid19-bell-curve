# Covid Bell Curve Viewer

A react application that displays a simple graph of confirmed COVID19 cases.

## Libraries and Sources
This application utilises:

* [ReactJS](https://reactjs.org/)
* [Recharts](https://recharts.org/) for graphing tools
* [pomber/covid19](https://github.com/pomber/covid19) for COVID19 data source.

## Getting started

### Prerequisites

[Yarn](https://yarnpkg.com/) or [Node](https://nodejs.org/)

## Node
#### Installing
```
npm install
```

#### Running / Developing
```
npm start
```

#### Building
```
npm build
```

## Yarn
#### Installing
```
yarn install
```

#### Running / Developing
```
yarn start
```

#### Building
```
yarn build
```

## How to use
Specify a country via 'country' URL query parameter. By default, the country is set to Australia if no value is present.

A list of accepted countries can be found in the source [JSON file](https://pomber.github.io/covid19/timeseries.json).

### Example:

```
covid19/?country=Australia
```