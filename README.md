This project is an educational game. The premise of this game is an interactive toggle game in which there is a question with a set number of option sets (with one correct answer for each one) and the background dynamically changes colour as more correct answers are picked. Once all correct answers have been selected, the background turns blue and the answers become locked in, they cannot be changed.
 
The order of the questions is randomised, and imported from a different page, to allow one to easily add and change questions in the future.

Built with TypeScript and React
 
Assumptions I have made:
1. That there will be a maximum of 4 question sets
2. For every correct answer there is an exact colour that the background changes to (for example when 1 answer is correct, background changes to X, when 2 are correct, the background changes to Y) rather than having it based on a % of how correct one is. 
