This project is an educational game. The premise of this game is an interactive toggle game in which there is a question with a set number of option sets (with one correct answer for each one) and the background dynamically changes colour as more correct answers are picked. Once all correct answers have been selected, the background turns blue and the answers become locked in, they cannot be changed.
 
The order of the questions is randomised, and imported from a different page, to allow one to easily add and change questions in the future.

The questions are in a separate file and have been imported into the App file so there is a clear separation between logic and the data (questions and answers). In addition, scalability is improved as questions can easily be added/modified, or the whole file can be changed without touching the application logic. The question file can even be copied and used in another game.

I could have used SCSS but as it was a smaller project, I did not feel like it was necessary.


Built with TypeScript and React
 
Assumptions I have made:
1. That there will be a maximum of 4 question sets.
2. For every correct answer there is an exact colour that the background changes to (for example when 1 answer is correct, background changes to X, when 2 are correct, the background changes to Y) rather than having it based on a % of how correct one is.
3. To make the app responsive, below a screen width of 425px, I used flex-direction: column so that as the screens got smaller and there was less space, the answers would eventually be organised on top of each other.
