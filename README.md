# Quizzle

## The Tech
* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* Sockets
* SASS
---

## User Stories

### MVP1
* [ ]I want to be able to play the game on my phone 
* [x]I want to be able to play the game in a group
* [x]I want to be able to read the instructions of the game
* [x]I want to be able to create a group
* [x]I want to be able to join a group
* [x]I want to be able to see the names of everyone who has joined before we start the game
* [x]I want to see a matching question and answer on my screen
* [x]I want to be able to see if my answer was right or wrong
* [x]I want to be able to end/leave the game
* [x]I want the captain of the team to be able to start a new game when everyone is ready

### MVP2
* [x]I want the game to be a fun and hectic quiz game
* [x]I want to see a random question and a random answer on my screen
* [ ]I want to make the users wait for everyone to amswer to go to the result screen
* [ ]I want there to be protection against duplicate team and user names
* [ ]When the game is completed, I want to see the overall results for the team
* [ ]Wait for timer or all player answers to be in before displaying results

### MVP3
* [ ]I want there to be a timer that limits how long I have to answer the question
* [ ]I want to be able to play multiple rounds
* [ ]I want to see what round we are on during each round of the game
* [ ]I want the captain of the team to be able to start a new round when everyone is ready

### Stretch
* [ ]Start Game: initially only show ‘create team’ button. ‘Join team’ button only shows if you have specified a team name that already exists
* [ ]Lobby: can only start game when more than 1 person has joined
* [ ]Splash screens: Question and Result
* [ ]Results shown in pie chart
* [ ]Delete user after two days(e.g. function happening on create team name)
* [ ]Randomly generate team names
* [ ]Player icons
* [ ]Timer is represented by colour/shape change
---

## Views (Client Side)
  | number | name | purpose |
  | --- | --- | --- |
  | -1 | Instructions | Paragraph showing instructions. "Start Game" button |
  | 0 | Welcome | App loads at this page. Displays app name. "How to Play" and "Start Game" buttons |
  | 1 | SetupGame | 2 inputs: teamname, username. 2 buttons: "Create Team", "Join Team" |
  | 2 | Lobby | Displays names of everyone who has joined the game. Captain has "Start Game" button |
  | ' | QuestionSplash | Displays "First Question" etc, times out after 1 second |
  | 3 | Game | Random question at top of screen. Random answers at bottom of screen. Timer displaying count down. Number displaying the round count |
  | ' | ResultSplash | Displays "Results are in!", times out after 1 second |
  | 4 | Results | Question at top of screen, answer (correct/incorrect) at bottom of screen. Captain has "Next Question" button |
  | 5 | GameEnd | Displays percentage and proportion of questions that were answered correctly. Captain has "Start New Game" button |
  ---

## Reducers (Client Side)
  | name | purpose |
  | --- | --- |
  | pageNumber | Stores info about which view/page to display |
  | questions | Stores an array of available questions |
  | teamPlayers | Stores the list of team members in the game |
  | player | Stores info about the current player |
  | teamName | Stores the name of the current team |
  | score | Stores info about current score (e.g. 5/10) |
  | playerResponses | Stores players answers |
  | (roundCount) | Stores which round the team is on |
  ---

 ## API (Client - Server)
| Method | Endpoint | Usage | Response |
| --- | --- | --- | --- | 
| Get | /api/v1/users/:team | Get users by team name (ensure no double up of name display users in lobby) | An array of users |
| Post | /api/v1/users/:team  | Create user and team | --- |
| Get | /api/v1/questions/:number | Get a specified number of questions | An Array of questions |
---

## DB (Server Side)
### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | name | String |
  | team | String |
  | captain | Bool |
  | date_created | Date |

### Questions
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | question | String |
  | correct_answer | String |
  | incorrect_answer_1 | String |
  | incorrect_answer_2 | String |
  | incorrect_answer_3 | String |
 ---