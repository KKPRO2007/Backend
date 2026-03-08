/*
========================================
🧠 15-Minute Core JavaScript Practice
========================================

TASK: Mini "Student Score Analyzer"

Rules:
- Use plain JavaScript only
- No libraries
- Use console.log for testing
- Focus on fundamentals, not shortcuts

----------------------------------------
INPUT DATA
----------------------------------------

const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];

(Note: scores are intentionally mixed types)

----------------------------------------
YOUR TASKS (FOLLOW IN ORDER)
----------------------------------------

1️⃣ Create a function named:
   analyzeScores(scoresArray)

----------------------------------------

2️⃣ Inside the function:

- Loop through the scoresArray
- Convert each value to a number
- Ignore values that become NaN after conversion

(Hint: use Number() and isNaN())

----------------------------------------

3️⃣ Categorize each valid score:

Use if / else conditions:

- score >= 90  → "Excellent"
- score >= 60  → "Pass"
- score < 60   → "Fail"

⚠️ You MUST use:
- if / else
- ternary operator (at least once)

----------------------------------------

4️⃣ Maintain counters:

- excellentCount
- passCount
- failCount

----------------------------------------

5️⃣ Calculate:

- Total number of valid students
- Average score
- Round average to 2 decimal places

----------------------------------------

6️⃣ Return an object from the function:

{
  totalStudents: number,
  excellent: number,
  pass: number,
  fail: number,
  averageScore: number
}

----------------------------------------
EXPECTED USAGE
----------------------------------------

const result = analyzeScores(scores);
console.log(result);

*/ 

function analyzeScores(Array){
 let b = 0, c = 0, d = 0, e = 0, f = 0;
  for (let i = 0; i < Array.length; i++){
    let num = Number(a[i])
      if (isNaN(ch)) continue
      f=f+ch;
      e++;
       let n = ch >= 90 ? "Excellent" : (ch >= 60 ? "Pass" : "Fail")
       if (n === "Excellent") b++
       else if (n === "Pass") c++
       else d++
  }
    let ob = e === 0 ? 0 : Number((f / e).toFixed(2))
    return {
    totalStudents: e,
    excellent: b,
    pass: c,
    fail: d,
    averageScore: j
  }
}
const scores = ["85", 92, "67", 40, 100, "30", 76, "90"]
 const result = analyzeScores(scores)
 console.log(result)

