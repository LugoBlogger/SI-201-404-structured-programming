# Midterm Exam

## Instruction
This is a short journey exam and you need to finish it in 2 weeks.  
It will start from `2025-April-22` to `2025-May-05`.   

To accomplish this exam, you need to sign-up in codewars.  
All the tutorials for sign-in up, setting up, finding a `KATA` (型),
solving a `KATA`, and viewing your solution whether it is correct or not are
in this documentation [Getting Started](https://docs.codewars.com/getting-started/registering).   
Please read the documentation to understand the mechanism of playing in codewars. 

In each day, you have to solve at **least 3 problems**.   
You can choose freely those three problems.   
At the end of this exam, you need to solve at least 30 problems (we only count the days from Monday to Friday, 
no weekend).   
No student has the same 30 problems at all.   
For the students that have the same problems for all 30 problems their scores will be deducted.

You have to make, your progress with the following folder name, directory, and format.
```
StudentID-yourname
├─ 00-your-problem
│  └─ 00-solutions.js
├─ 01-your-problem
│  └─ 01-solutions.js
├─ 02-your-problem
│  └─ 02-solutions.js
├─ ...
├─ img-resources (optional)
│  ├─ image01.png
│  ├─ image02.png
│  └─ image02.png
├─ stories.md
├─ table-record.md (or table-record.csv)
└─ user-profile-completed-katas.png
```

See my working example [`10241000-henokh-lugo-hariyanto`](./10241000-henokh-lugo-hariyanto/)
to understand the template of your submission. There is a short tutorial
to make yourself familiar with the codewars dashboard in 
[`codewards-tutorial.md`](./codewars-tutorial.md)

For each problem, you have to create a directory with a format
`##-problem-name`. It started with two digits number from `00` 
until `30` (or more, depends on your choice) followed by
the name of the codewars' problem and replaced the whitespace
with `-`. If there are any non-alphanumeric characters in the problem's name, just ignore those characters.
Inside a problem directory, there is a single file that has the same
prefix of two digits of your problem number followed by `-solution.js`.

There is no specific format inside the JavaScript file.
In the `00-descending-order`, I put two examples that used simple test
cases (`00-solution.js`) and with the help of `chai` module
(`00-soluution-with-assert.js`).  See **Advanced setup** in 
[`codewars-tutorials.md`](./codewars-tutorial.md) if you want to use
this `chai` module. But this is not mandatory.

In `stories.md`, you have to tell your experience when solving the problem
starting by explaining the problem with your own words and your strategy 
to solve it. If your explanation contains image(s), put them into 
`img-resources` directory with the appropriate name for png files.
Remember to use **relative path** in your `stories.md` when
inserting the images.

In `table-record.md` (or `table-record.csv`, you choose either `.md` or `.csv`),
follow the given format, and make a record of your working problems. 
Do not use any fancy style, just follow the format.

Make a screenshot capture for all completed `KATA` in your user profile. 
Save it into `.png` and rename it to `user-profile-completed-katas.png`.
Here is the example of [my completed `KATA`s](./10241000-henokh-lugo-hariyanto/wwww.codewars.com_users_lugoblogger_completed.png)


[**Note**]: 
1. This exam will train your endurance in problem solving.
You can use ChatGPT, but if you fail to understand the problem and 
the solution, you will get the lowest possible score.
2. You have to follow all the format of submission exactly as it is said. 
No need for an extra layout setting. Just type your words and solution
3. You can answer in Bahasa Indonesia or English. Make sure the sentences
that you write is understandable.
4. **Do not use** the problem that I used in my template
   - **`7 kyū`** [`Descending order`](https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript)
   - **`7 kyū`** [`Is this triangle?`](https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript)
   - **`6 kyū`** [`Bit counting`](https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript)

At the end I will test each student to present one of the problems
that I choose randomly from your working solution. There will be an 
arrangement how this testing should be scheduled based on your
available time before Week 15.


## Score evaluation
- Your solution is understandable from the reader perspective 
  (not a text generation) (20-50)
- You follow all the layout and procedure carefully (0-10)
- You can defend your solution during the mock exam (0-40)
