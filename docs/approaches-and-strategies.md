# Q&A Strategy Prompt

“Propose a file/folder structure for this project. Ask me a series of yes/no questions that will help you to provide a better recommendation.”

- Answer the AI with simple to-the-point answers if it deviates from yes/no later on. This is just how AI works.

# Pros and Cons Prompt

“What are a few different ways that  can implement this db logic. Give me the pros and cons of each strategy. #file:db.ts”

- Mention the file directly so that that the AI reads the code you want it to read.

# Stepwise Chain of Thought Prompt

“Help me refactor the code in #file:vehiclesService.ts. Go one step at  a time. Do not move to the next step until I give the keyword “next”. Begin.”

- You ask the AI to break things down into steps and go one step at a time.

# Role Prompt

“You are a skilled instructor who makes complex topics easy to understand. You come up with fun exercises so that your students can learn by doing. Your goal is to teach students to be proficient with regex. Move one step at a time and wait for the student to provide the correct answer before you move to the next concept. If the student provides the wrong answer, give them a hint. Begin.”

- You’re combining the role and the chain of thought prompt.
- AI loves to role-play.