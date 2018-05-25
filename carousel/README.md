![ClearScore](https://github.com/ClearScore/tech-screen/blob/master/assets/clearscore.png)

# Carousel

## Purpose

The purpose of the task is to increase familiarity between the developer and the code.

We will be using the output of this task in the next step in the interview process.

## Time-frame

We expect this task to take *one evening* to complete.

You do not have to complete all the tasks, but please be aware of [the purpose)(#purpose) above and take note of [what we're looking for](../README.md#what-were-looking-for)

## Background

A developer is halfway through a `score indicator feature` card and has been called away.

It is now up to you to finish the feature ready to release.

## The Task

Build our circular score indicator, as shown on [clearscore.com/account/](https://www.clearscore.com/account/) and [https://youtu.be/tIjtcL5Z0Wk?t=5](https://youtu.be/tIjtcL5Z0Wk?t=5).
 * [Desktop example](/docs/score-indicator-desktop.jpg) 
 * [Mobile Example](/docs/score-indicator-mobile.jpg)

Send your solution as a link to a public git repository with clear instructions and your thoughts in the README.

The data can be requested from [https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json](https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json)

 1. The carousel should contain at least 2 slides.
 2. the slides should animate from slide 1 to slide 2
 3. Slide 1 should show the 'score indicator'
 4. Slide 2 should show 'long term debt'.

### Stretch goal

 1. Show the given score in the middle and with an arc outside that represents the score out of 700
 2. The arc animates on load
 3. Add a bouncing effect to the end of the animation of the arc

## Prerequisites

 * Node version >= 9.3.0
 * Yarn is used as the package manager

## Getting Started

 * Run: `yarn start:webpack`
 * Run: `yarn start:dev` _(in a new terminal)_
 * Goto: `http://localhost:3000/`
