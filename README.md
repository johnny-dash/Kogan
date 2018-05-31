<!--
@Author: Johnny Mao <DIMao>
@Date:   2018-05-30
@Email:  maodi101@gmail.com
-->

# Introduction

This is a application that fetch the product data by endpoint url and calculate the product average cubic weight by selected type.

To run the application, please run the main file(index.js) which will invoke this 'calcAverageCubicWeight' function, the instruction has been described in the 'Instruction & Usage'.

# Installation & Usage

1.  Make sure Node.Js are installed as this is a command line application 1implemented by javascript
2.  `git clone https://github.com/johnny-dash/Kogan.git`
3.  `cd Kogan`
4.  `npm i`

## Run

By running the following code, you will see the result of average cubic weight for air conditioners will be print in the console.

`npm run start`

## Test

run the following command line to run the unit test

`npm run start`

run the following command line to check the unit test coverage

`npm run test:cover`

# Design

## Extendability

This code leave the configuration file 'defaultSetting.js' for different query endpoint and different query product type.

The main function has been encapsulated as calcAverageCubicWeight function in calcAverageCubicWeight.js. This function takes three parameters, the endpoint url and the query product type.

## Dependency injection

The fetchData function has been injected at root level to make the program testable.

## Parallel calculation

This program will immediately calculate the result data while fetching the new endpoint. This has been implemented by Promise.all and recursive function call in calculation.js file.
