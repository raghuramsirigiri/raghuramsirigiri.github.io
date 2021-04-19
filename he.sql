SELECT C1.CONTEST_ID, C1.HACKER_ID, C1.NAME, SUM(S2.STS) AS CSTS, SUM(S2.STAS) AS CSTAS, SUM(S1.STV) AS CSTV, SUM(S1.STUV) AS CSTUV
FROM Contests AS C1
LEFT JOIN Colleges AS C2 ON C1.CONTEST_ID=C2.CONTEST_ID
LEFT JOIN Challenges AS C3 ON C2.COLLEGE_ID=C3.COLLEGE_ID
LEFT JOIN (SELECT CHALLENGE_ID, SUM(TOTAL_SUBMISSIONS) AS STS, SUM(TOTAL_ACCEPTED_SUBMISSIONS) AS STAS FROM Submission_Stats GROUP BY CHALLENGE_ID) AS S2 ON C3.CHALLENGE_ID=S2.CHALLENGE_ID
LEFT JOIN (SELECT CHALLENGE_ID, SUM(TOTAL_VIEWS) AS STV, SUM(TOTAL_UNIQUE_VIEWS) AS STUV FROM      View_Stats GROUP BY CHALLENGE_ID) AS S1 ON C3.CHALLENGE_ID=S1.CHALLENGE_ID
GROUP BY C1.CONTEST_ID, C1.HACKER_ID, C1.NAME
HAVING (CSTS+CSTAS+CSTV+CSTUV)>0
ORDER BY C1.CONTEST_ID ASC