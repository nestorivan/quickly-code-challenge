# Quickly Code Challenge

Small code challenge that consist in 3 routes, 2 forms with validation and a user dashboard (barebones)


## Compromises
In order to finish this project quickly a few compromises were made:

- Used individual functions for API calls - usually i like to create singleton classes for services and bundle all related API calls there.
- Appended token manually - usually i would create a white list array to hold urls that dont need an `Authorization Token`, and for those that do need a token i would append the token via interceptors. Again for simplicity of this project i just included it manually in the headers.
- Local storage instead of a Context Store - it was way quicker.

## Environment Variables
To run this project, you will need to add the following environment variables to your env file

`VITE_QUICKLY_API_BASE_ROUTE` 

## Tests
To run test simply run 

```npm run tests```