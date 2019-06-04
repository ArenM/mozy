# Mozy

## ABOUT

This is an app designed to aid people in finding others to carpool with. This benefits modern society by creating a more productive way for people to carpool and adjust their schedules accordingly. The app could also be ecologically and environmentally beneficial on a larger scale. The goal is to get those who don’t typically carpool, to start carpooling

The user begins by creating an account. 

The app encourages the user to meet up with people and either drive them, or ride with them, to a place that they each want to travel to. 

Once you have created the account you can send messages to others in order to coordinate scheduling for meeting up, driving and/or riding to a location. 

Messages are sent on the app, and can be forwarded to other forms of communication like email or sms. 

Once two or more people using the app have agreed to a place they want to get to, the rides are configured, you can meet each other at set locations, and carpool to your mutual destination.

### Technologies
Front-end: React/Redux

Routing: React-Router

React Libraries: Material-UI

Back-end: Flask

Database: Mongo-db with flask-mongo

Authentication: flask-login

### User stories

#### An unauthenticated user visiting the site will see an about page and a prominent link for registration or login
  - Landing page will include a sales pitch
  - User will be asked to either log in or register

#### An unauthenticated user can create an account
  - Email verification
  - Admin verification

#### An authenticated user can manage their profile
  - Edit personal information
  - Delete account

#### An authenticated user will see a map of possible rides to join on the homepage
  - They can click on a ride to view information – time/date, point A to
    point B, pickup spots
      - Message the creator of the ride
      - Request to join the ride
      - Leave a ride they’ve joined – penalty?

#### An authenticated user will see a list of communications
  - User can see overview of communication – can click for more info
      - Display full message
      - Display messaging interface where they can type and submit a message
      - Display history of messages with that user

## Todo
 - [x] User log-in
 - [x] User sign-up
 - [ ] User profile (editable by user)
 - [ ] List of trips which users can add to
 - [ ] Trips on map
 - [ ] Users can join non-full trips pending approval by trip creator
 - [ ] Individual messaging between users
