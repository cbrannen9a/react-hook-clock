## React-Hook-Clock

[Demo](https://cbrannen9a.github.io/react-hook-clock/)

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Project Aim

Aim to create a clock which displays the current time in a selectable time-zone or location (doesn’t have to be both) in an intuitive way to a visually able user. 

### Description

The project uses the React Hooks API, this has just been released so took this as good opportunity to build an app using it.
- The Dropdown component uses the useState and useEffect hooks
- The Clock and AnalogClock components use a custom hook for determining the time based on the timezone selected.

### Limitations

The project was undertaken with a 2hr time-limit.

Given more time I would have liked to add:
- More styling such as colouring the background according to the time. 
- Added a search to the location/timezone selection
- Accounted for issues rendering the AnalogClock component in Edge or IE.
- Added more tests to check the functionality of each component

## Additonal notes

To get the project clone the repo, yarn/npm install the yarn start/npm start, then open [localhost:3000](http://localhost:3000)

### Credits

The css for AnalogClock is from [here](https://medium.com/the-andela-way/create-a-pure-css-clock-with-svg-f123bcc41e46)
