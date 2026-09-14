var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "  Introduction  This eBook contains all of the course material for our MAT 2010 class this semester. It is NOT a substitute for attending class, participating in the activities, completing the online homework, and reading the textbook. It is meant to be a supplement to all of these, allowing you to go back and review material\/solutions that were confusing to you when you saw them the first time. This is the blank version of the book, which contains empty versions of all class notes and activities. These will be updated before each class so that you can download or print out the notes to write on in class. The other version of the book, available on Canvas, contains the filled-in version of these notes and the answers to worksheets after they are graded.    Course Notes  These are the notes that were covered during class time. The hand-written version of the notes that was actually presented is available directly from the course Canvas page. These notes are a typed version that covers the same content in a similar level of detail.    In-Class Activities  Copies of any in-class activities are available here. This is not a substitute for working on the activity in-class, but if you would like a blank copy to reattempt later in the semester, you can find it here.    Handouts  Any helpful handouts or notes sheets will be included here.    Homework  Any hand-in homework that does not come directly from an in-class activity will be available here. The online homework is a separate part of the course, available from our Canvas site.   "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/31     Introduction to the class    Introduction to limits    Average and Instantaneous rates of change       Introduction to the Course  Welcome to Calculus 1!  What is the point of this course?        A red car passes through an intersection at noon traveling east at 40 mph. A blue care pass through the same intersection at 12:15pm heading north at a rate of 45 mph. If both cars keep going straight in the same direction, how fast is the distance between them changing at 1pm?      What should the radius and height of a cylindrical can be to minimize the surface area if the volume must be 1 L?       Introduction to the People  Who am I?  Who are all of you? Take about 3 minutes to introduce yourself to the people around you. These are going to be your companions on this semester-long journey that we have together. When we come back together, I'll want everyone to introduce themselves with their name and intended major\/career path.      Syllabus and Canvas Overview  First off, the syllabus. The entire syllabus is available on our Canvas site.     Basic info    Qualifying    Attendance    Student Hours    Homework    Quizzes and Tests    Grade Policy and Final Exam Requirements    AI and Calculators     For the Canvas site:   Home page    Modules    Agenda page with notes    Cengage for homework and eBook         Introduction to Limits  The main concept that sets Calculus apart from Precalculus is the idea of a limit. Before, if we couldn't plug something into a function, we just gave up. Now, we want to be a little more particular about that.    Consider the function . Investigate what looks like near .         Consider the function . Investigate what looks like near .    We want to have a mathematical way to distinguish between these two scenarios, one where it looks like there should be a value and one where there should not be. This is the idea of approaching a value is the idea of a limit.     Why care about this?  It turns out that there are a surprising number of physical problems that revolve around this issue. We'll cover two of them today.    The Tangent Problem    Find the equation of the tangent line to the graph of at .        The Velocity Problem  If you're driving in a car, you have a speedometer that tells you how fast you're going at a particular moment in time. However, if I gave you a function (or graph) of your position as a function of time, how would you get instantaneous velocity from that?    If an object is dropped from a height, physics tells us that the distance the object has fallen is given by where is in seconds and is in meters. If a ball is dropped off a skyscraper, how fast is it moving after 3 seconds?       Both of these examples are similar. In each case, we   Wanted something that we couldn't directly find    Found an approximation to that by looking at an average rate of change, then    Made the gap smaller and smaller to get to the instantaneous rate of change.         Find the equation of the tangent line to the graph of at .       Tuesday 9\/1     Motivation for limits.    Definition of a limit.    Reading limits from graphs.       The Velocity Problem  If you're driving in a car, you have a speedometer that tells you how fast you're going at a particular moment in time. However, if I gave you a function (or graph) of your position as a function of time, how would you get instantaneous velocity from that?    If an object is dropped from a height, physics tells us that the distance the object has fallen is given by where is in seconds and is in meters. If a ball is dropped off a skyscraper, how fast is it moving after 3 seconds?       Both of these examples are similar. In each case, we   Wanted something that we couldn't directly find    Found an approximation to that by looking at an average rate of change, then    Made the gap smaller and smaller to get to the instantaneous rate of change.         Set up how you would find the equation of the tangent line to the graph of at .       Definition of a Limit  Now let's try to give a bit more of a specific definition to this idea we've been hinting at so far. In some sense, we want to talk about the value of a function looks like it's getting closer to as the input approaches a given value.   The Limit, attempt 1   Let be a function defined around some point (but not necessarily at ). We say that , which is read the limit of as approaches is ,    This seems all well and good for all of the examples we've talked about before: because     However, not everything works so well.    Consider the statement .    So, maybe that definition wasn't so great. We would like a limit to be a single number, and want the function values to actually get close to the target point, not just closer .      Let be a function defined around some point (but not necessarily at ). We say that , which is read the limit of as approaches is ,    Why is this better?  The other main point is that limits don't have to exist.     Graphical Limits  One of the best ways to try to read\/interpret limits is from graphs. We already saw how tables can be used to approximate limits; graphs make that process even easier.    Consider the function represented by the graph below.     g(x) = x+4  f(x)=1-(x-1)^2              Determine each of the following limits, or state that they don't exist.                              For the function whose graph is drawn below, determine each of the following limits, if they exist.     g(x) = x+3  h(x)=-x\/2  f(x)=1-(x-3)^2  r(x)=(1\/4)*(x^2 - 4)                                                A special limit    Use the graph below to approximate the value of      f(x)=sin(x)\/x                 Wednesday 9\/2     Investigate one-sided limits.    Understand the various ways in which a limit may not exist.       Limits that Don't Exist  We saw last class a few examples of limits that didn't exist.     g(x) = x+4  f(x)=1-(x-1)^2              However, if I look just from the left or just from the right as I approach the point where the limit doesn't exist, I do actually get a value. Since it may be useful to have or look at these values, we define them.       Let be a function defined near a point (but not necessarily at ).        Consider the graph of the function sketched below.     g(x) = x  r(x) = x\/2  f(x) = 2*(x+2)^2 - 2  h(x)= (x-3)^2 - 2                   Determine each of the following or state that they do not exist                                                   Based on our previous example, as well as thinking about how the definitions of limits and one-sided limits relate, we get the following theorem.            Ways for Limits to Not Exist  We've now seen one way for limits to not exist:  But what else can happen?      Limits by Oscillation    Investigate .        Limits that go to infinity    Investigate .    In order to properly describe what is happening here, we write       We say that      Consider the function . Describe the behavior of this function near .        We say that the function has a vertical asymptote at if any of the following are true:      Analyze the vertical asymptotes of .    Besides functions with denominators, another function that has a vertical asymptote is .     Friday 9\/4     Evaluate limits using direct substitution.    Use the limit laws to evaluate limits.       Limits by Direct Substitution  Now we want to actually start evaluating limits. We'll do this over a few days, but we'll start with the simple case here.  It would be really great if there was a way to do this that didn't involve plugging in a bunch of values or trying to draw and look at a graph. Ideally, we could just plug the limiting value into the function and get the correct answer for a limit. It turns out that this sometimes works, and we need to figure out what those cases are.    Let be a function and a value. If  then .    We want to work towards filling in what that condition is for the theorem over the course of today. There are two pieces that will get us there   A few basic limits, and    Limit Laws, to combine them together.         Basic Limits  There are a few basic limits that we will use over and over again. These are the ones that we will start with.    Let be a real number. Then    The easiest way to verify these limits is by looking at graphs, but intuitively, they also make sense.      Limit Laws  The book lists out a bunch of laws for combining limits. I'll put them all here for the sake of completeness, but you don't really need to memorize them. The main rule is that if the operation is allowed on the limiting values, it generally works in the limit context.    Let and be real numbers, and let and be functions such that                    as long as      for any positive integer      for any positive integer . If is even, then we also need .             So what kinds of functions satify the direct substitution property?    So, we then end up with the following.    Let be a function and a value. If  then .    What happens if the denominator is zero? Well, that's a story for next class.    "
},
{
  "id": "notes-week-01-3-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Introduction to the class    Introduction to limits    Average and Instantaneous rates of change    "
},
{
  "id": "notes-week-01-3-4-1",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-4-1",
  "type": "Example",
  "number": "1",
  "title": "",
  "body": "  A red car passes through an intersection at noon traveling east at 40 mph. A blue care pass through the same intersection at 12:15pm heading north at a rate of 45 mph. If both cars keep going straight in the same direction, how fast is the distance between them changing at 1pm?   "
},
{
  "id": "notes-week-01-3-4-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-4-2",
  "type": "Example",
  "number": "2",
  "title": "",
  "body": "  What should the radius and height of a cylindrical can be to minimize the surface area if the volume must be 1 L?   "
},
{
  "id": "notes-week-01-3-7-1-3",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-7-1-3",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": "  Consider the function . Investigate what looks like near .   "
},
{
  "id": "notes-week-01-3-8-1",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-8-1",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": "  Consider the function . Investigate what looks like near .   "
},
{
  "id": "notes-week-01-3-9-2-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-9-2-2",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": "  Find the equation of the tangent line to the graph of at .   "
},
{
  "id": "notes-week-01-3-10-1-3",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-10-1-3",
  "type": "Example",
  "number": "6",
  "title": "",
  "body": "  If an object is dropped from a height, physics tells us that the distance the object has fallen is given by where is in seconds and is in meters. If a ball is dropped off a skyscraper, how fast is it moving after 3 seconds?   "
},
{
  "id": "notes-week-01-3-12-1",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-12-1",
  "type": "Example",
  "number": "7",
  "title": "",
  "body": "  Find the equation of the tangent line to the graph of at .   "
},
{
  "id": "notes-week-01-4-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-4-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Motivation for limits.    Definition of a limit.    Reading limits from graphs.    "
},
{
  "id": "notes-week-01-4-3-1-3",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-4-3-1-3",
  "type": "Example",
  "number": "8",
  "title": "",
  "body": "  If an object is dropped from a height, physics tells us that the distance the object has fallen is given by where is in seconds and is in meters. If a ball is dropped off a skyscraper, how fast is it moving after 3 seconds?   "
},
{
  "id": "notes-week-01-4-5-1",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-4-5-1",
  "type": "Example",
  "number": "9",
  "title": "",
  "body": "  Set up how you would find the equation of the tangent line to the graph of at .   "
},
{
  "id": "def-limit-ver1",
  "level": "2",
  "url": "notes-week-01.html#def-limit-ver1",
  "type": "Definition",
  "number": "10",
  "title": "The Limit, attempt 1.",
  "body": " The Limit, attempt 1   Let be a function defined around some point (but not necessarily at ). We say that , which is read the limit of as approaches is ,   "
},
{
  "id": "notes-week-01-4-7-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-4-7-2",
  "type": "Example",
  "number": "11",
  "title": "",
  "body": "  Consider the statement .   "
},
{
  "id": "def-limit-ver2",
  "level": "2",
  "url": "notes-week-01.html#def-limit-ver2",
  "type": "Definition",
  "number": "12",
  "title": "",
  "body": "  Let be a function defined around some point (but not necessarily at ). We say that , which is read the limit of as approaches is ,   "
},
{
  "id": "notes-week-01-4-9-1-3",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-4-9-1-3",
  "type": "Example",
  "number": "13",
  "title": "",
  "body": "  Consider the function represented by the graph below.     g(x) = x+4  f(x)=1-(x-1)^2              Determine each of the following limits, or state that they don't exist.                        "
},
{
  "id": "notes-week-01-4-10-1",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-4-10-1",
  "type": "Example",
  "number": "14",
  "title": "",
  "body": "  For the function whose graph is drawn below, determine each of the following limits, if they exist.     g(x) = x+3  h(x)=-x\/2  f(x)=1-(x-3)^2  r(x)=(1\/4)*(x^2 - 4)                                            "
},
{
  "id": "notes-week-01-4-11-1-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-4-11-1-2",
  "type": "Example",
  "number": "15",
  "title": "",
  "body": "  Use the graph below to approximate the value of      f(x)=sin(x)\/x            "
},
{
  "id": "notes-week-01-5-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Investigate one-sided limits.    Understand the various ways in which a limit may not exist.    "
},
{
  "id": "def-one-sided-limits",
  "level": "2",
  "url": "notes-week-01.html#def-one-sided-limits",
  "type": "Definition",
  "number": "16",
  "title": "",
  "body": "  Let be a function defined near a point (but not necessarily at ).   "
},
{
  "id": "notes-week-01-5-5-1",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-5-1",
  "type": "Example",
  "number": "17",
  "title": "",
  "body": "  Consider the graph of the function sketched below.     g(x) = x  r(x) = x\/2  f(x) = 2*(x+2)^2 - 2  h(x)= (x-3)^2 - 2                   Determine each of the following or state that they do not exist                                                "
},
{
  "id": "thm-one-sided-limits",
  "level": "2",
  "url": "notes-week-01.html#thm-one-sided-limits",
  "type": "Theorem",
  "number": "18",
  "title": "",
  "body": "      "
},
{
  "id": "notes-week-01-5-8-1-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-8-1-2",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": "  Investigate .   "
},
{
  "id": "notes-week-01-5-9-1-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-9-1-2",
  "type": "Example",
  "number": "20",
  "title": "",
  "body": "  Investigate .   "
},
{
  "id": "def-infinite-limits",
  "level": "2",
  "url": "notes-week-01.html#def-infinite-limits",
  "type": "Definition",
  "number": "21",
  "title": "",
  "body": "  We say that   "
},
{
  "id": "notes-week-01-5-10-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-10-2",
  "type": "Example",
  "number": "22",
  "title": "",
  "body": "  Consider the function . Describe the behavior of this function near .   "
},
{
  "id": "def-vertical-asymptote-one",
  "level": "2",
  "url": "notes-week-01.html#def-vertical-asymptote-one",
  "type": "Definition",
  "number": "23",
  "title": "",
  "body": "  We say that the function has a vertical asymptote at if any of the following are true:   "
},
{
  "id": "notes-week-01-5-11-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-11-2",
  "type": "Example",
  "number": "24",
  "title": "",
  "body": "  Analyze the vertical asymptotes of .   "
},
{
  "id": "notes-week-01-6-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-6-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Evaluate limits using direct substitution.    Use the limit laws to evaluate limits.    "
},
{
  "id": "thm-direct-substitution-v1",
  "level": "2",
  "url": "notes-week-01.html#thm-direct-substitution-v1",
  "type": "Theorem",
  "number": "25",
  "title": "",
  "body": "  Let be a function and a value. If  then .   "
},
{
  "id": "thm-basic-limits",
  "level": "2",
  "url": "notes-week-01.html#thm-basic-limits",
  "type": "Theorem",
  "number": "26",
  "title": "",
  "body": "  Let be a real number. Then   "
},
{
  "id": "thm-limit-laws-intro",
  "level": "2",
  "url": "notes-week-01.html#thm-limit-laws-intro",
  "type": "Theorem",
  "number": "27",
  "title": "",
  "body": "  Let and be real numbers, and let and be functions such that                    as long as      for any positive integer      for any positive integer . If is even, then we also need .      "
},
{
  "id": "thm-direct-substitution-v2",
  "level": "2",
  "url": "notes-week-01.html#thm-direct-substitution-v2",
  "type": "Theorem",
  "number": "28",
  "title": "",
  "body": "  Let be a function and a value. If  then .   "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Tuesday 9\/8     Compute limits of functions using the limit laws.    Compute limits of indeterinate form limits using algebraic cancellation, radical simplification, or special limits.       Indeterminate Forms  Before we get started on new topics for today, let's review the direct substitution property from last class.    Let be a function and a real number. If is:   a polynomial or algebraic function without denominator, or    a rational function of the form where and are polynomials and    Then .         Compute the following limits.      .       .       .        Indeterminate Forms  All of this before had a setup where the denominator was not zero. But what happens if it is? The direct substitution property does not apply here. However, in some cases, there may be something we can do.    An indeterminate form is a limit of the form where       In our case indeterminate means that the actual value of the limit is not determined by the expression when we just plug in .      Evaluating Indeterminate Limits  So, how can we try to evaluate these? The normal approach is to use algebraic simplification to reduce to a scenario where we can plug in the desired value and get something that is not indeterminate.    Use algebraic simplification to compute the limit        Be very careful with the notation in these limits. The expression and chain of steps need to make logical sense. In particular, you need to write lim at each step until you actually take the limit (that is, plug in the desired value).    Evaluate .        Evaluate .       Other Limits to Evaluate  There are two other types of limits that we need to be careful about evaluating:   Piecewise Functions, and    Special Trigonometric Limits.     We'll start with the trig limits. On the first worksheet, we had the first important trigonometric limit: . From this, we can prove a second limit.    Compute .        Piecewise Functions  For piecewise functions, we need to care about all of the places that the function changes definition. At each of those, we'll want to use one-sided limits to determine if the limit exists and what it is.    Compute each of the following limits:      .       .               For the function compute .       Wednesday 9\/9     Practice with limits involving indeterminate forms.    Review and practice with vertical asymptotes.       Limits Involving Infinity  Our next few days will cover limits involving infinity. There are two main types of this: .      Limits equalling infinity  The key point with these limits is that they don't exist. There is no real number that the function gets close to as . However, we use as a shorthand notation.  How do we get functions to do this?     Recall the definition of vertical asymptote from a previous class.      Find all vertical asymptotes of . Determine the behavior of near these asymptotes.        Find all vertical asymptotes of . Determine the behavior of near these asymptotes.        Find all vertical asymptotes of . Determine the behavior of near these asymptotes.       Friday 9\/11     Understand the idea of limits as the input variable goes to infinity.    Compute horizontal asymptotes using this approach.    Quiz on one-sided limits and indeterminate forms.       Limits as goes to infinity  Last time, we discussed limits where the answer was . This gave us vertical asymptotes of our functions. Now, we want to look at the other kind of limit involving infinity, one where the variable goes to infinity.  For a function , what does mean or represent?    Let be a function defined on some interval . We say that if         The line is called a horizontal asymptote of the curve if    Note that being a horizontal asymptote does not mean that you can't cross the line. It's just this limiting condition.      Find the vertical and horizontal asymptotes of the function represented by these graphs.      g(x) = -1*(x+1)^2\/((x-1)*(x+4))  f(x)=3*(x+1)^2\/((x-1)*(x+4))              g(x) = -1*(x+1)^2\/((x-1)*(x+4))  f(x)=3*(x+1)^2\/((x-1)*(x+4))                 Key Examples  One of the most common functions to look at with this kind of problem is powers of .    Determine the value of .    We can therefore make a statement about what happens to these kinds of expressions for any power of :     One of the main uses of this result is finding horizontal asymptotes of rational functions.    Find the horizontal asymptotes of the function .      "
},
{
  "id": "notes-week-02-2-2",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Compute limits of functions using the limit laws.    Compute limits of indeterinate form limits using algebraic cancellation, radical simplification, or special limits.    "
},
{
  "id": "thm-direct-sub-final",
  "level": "2",
  "url": "notes-week-02.html#thm-direct-sub-final",
  "type": "Theorem",
  "number": "29",
  "title": "",
  "body": "  Let be a function and a real number. If is:   a polynomial or algebraic function without denominator, or    a rational function of the form where and are polynomials and    Then .   "
},
{
  "id": "notes-week-02-2-4-1",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-4-1",
  "type": "Example",
  "number": "30",
  "title": "",
  "body": "  Compute the following limits.      .       .       .    "
},
{
  "id": "def-indetForms-one",
  "level": "2",
  "url": "notes-week-02.html#def-indetForms-one",
  "type": "Definition",
  "number": "31",
  "title": "",
  "body": "  An indeterminate form is a limit of the form where   "
},
{
  "id": "notes-week-02-2-6-1-3",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-6-1-3",
  "type": "Example",
  "number": "32",
  "title": "",
  "body": "  Use algebraic simplification to compute the limit    "
},
{
  "id": "notes-week-02-2-7-2",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-7-2",
  "type": "Example",
  "number": "33",
  "title": "",
  "body": "  Evaluate .   "
},
{
  "id": "notes-week-02-2-8-1",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-8-1",
  "type": "Example",
  "number": "34",
  "title": "",
  "body": "  Evaluate .   "
},
{
  "id": "notes-week-02-2-9-1-4",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-9-1-4",
  "type": "Example",
  "number": "35",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "notes-week-02-2-10-1-3",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-10-1-3",
  "type": "Example",
  "number": "36",
  "title": "",
  "body": "  Compute each of the following limits:      .       .         "
},
{
  "id": "notes-week-02-2-11-1",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-11-1",
  "type": "Example",
  "number": "37",
  "title": "",
  "body": "  For the function compute .   "
},
{
  "id": "notes-week-02-3-2",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-3-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Practice with limits involving indeterminate forms.    Review and practice with vertical asymptotes.    "
},
{
  "id": "notes-week-02-3-5-1",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertical asymptote "
},
{
  "id": "notes-week-02-3-6-1",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-3-6-1",
  "type": "Example",
  "number": "38",
  "title": "",
  "body": "  Find all vertical asymptotes of . Determine the behavior of near these asymptotes.   "
},
{
  "id": "notes-week-02-3-7-1",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-3-7-1",
  "type": "Example",
  "number": "39",
  "title": "",
  "body": "  Find all vertical asymptotes of . Determine the behavior of near these asymptotes.   "
},
{
  "id": "notes-week-02-3-8-1",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-3-8-1",
  "type": "Example",
  "number": "40",
  "title": "",
  "body": "  Find all vertical asymptotes of . Determine the behavior of near these asymptotes.   "
},
{
  "id": "notes-week-02-4-2",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-4-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Understand the idea of limits as the input variable goes to infinity.    Compute horizontal asymptotes using this approach.    Quiz on one-sided limits and indeterminate forms.    "
},
{
  "id": "notes-week-02-4-3-1-2",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-4-3-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertical asymptotes "
},
{
  "id": "def-limit-to-inf",
  "level": "2",
  "url": "notes-week-02.html#def-limit-to-inf",
  "type": "Definition",
  "number": "41",
  "title": "",
  "body": "  Let be a function defined on some interval . We say that if   "
},
{
  "id": "def-horiz-asympt",
  "level": "2",
  "url": "notes-week-02.html#def-horiz-asympt",
  "type": "Definition",
  "number": "42",
  "title": "",
  "body": "  The line is called a horizontal asymptote of the curve if   "
},
{
  "id": "notes-week-02-4-5-1",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-4-5-1",
  "type": "Example",
  "number": "43",
  "title": "",
  "body": "  Find the vertical and horizontal asymptotes of the function represented by these graphs.      g(x) = -1*(x+1)^2\/((x-1)*(x+4))  f(x)=3*(x+1)^2\/((x-1)*(x+4))              g(x) = -1*(x+1)^2\/((x-1)*(x+4))  f(x)=3*(x+1)^2\/((x-1)*(x+4))             "
},
{
  "id": "notes-week-02-4-6-1-3",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-4-6-1-3",
  "type": "Example",
  "number": "44",
  "title": "",
  "body": "  Determine the value of .   "
},
{
  "id": "notes-week-02-4-7-2",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-4-7-2",
  "type": "Example",
  "number": "45",
  "title": "",
  "body": "  Find the horizontal asymptotes of the function .   "
},
{
  "id": "notes-week-03",
  "level": "1",
  "url": "notes-week-03.html",
  "type": "Section",
  "number": "",
  "title": "Week 3",
  "body": " Week 3   This is an outline of the topics we covered in Week 3 of the semester, from September 14 to September 18.    Monday 9\/14     Review computing limits as     Solve more complicated problems involving horizontal asymptotes.       Horizontal Asymptotes, Round 2  Last time, we looked at horizontal asymptotes of simple rational functions. What was the main property we used, and how did we set up the problem to make that useful?    Compute and for the function .       Recall that we could also get to this same point by looking at horizontal asymptotes of functions; that also requires taking the limit as goes to infinity and negative infinity. Some problems, however, are not as simple as the one we just computed.    Find the horizontal asymptotes of the function        Other Limits  Outside of rational functions, there are other functions with horizontal asymptotes that are worth looking into.    Analyze the horizontal asymptotes of the following functions.      and               and           Compute         Investigate and for the function .        Evaluate .        Compute .       Tuesday 9\/15     Determine all vertical and horizontal asymptotes of functions       Horizontal and Vertical Asymptotes  From previous classes, recall the definition of horizontal and vertical asymptote.  Today, we want to work on answering questions that involve finding all vertical and horizontal asymptotes of a function.       Find all horizontal and vertical asymptotes of the function . Use this information to draw a rough sketch of the graph of this function.        Determine all vertical and horizontal asymptotes of the function .        Compute .      "
},
{
  "id": "notes-week-03-3-2",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-3-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Review computing limits as     Solve more complicated problems involving horizontal asymptotes.    "
},
{
  "id": "notes-week-03-3-3-1-3",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-3-3-1-3",
  "type": "Example",
  "number": "46",
  "title": "",
  "body": "  Compute and for the function .   "
},
{
  "id": "notes-week-03-3-4-2",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-3-4-2",
  "type": "Example",
  "number": "47",
  "title": "",
  "body": "  Find the horizontal asymptotes of the function    "
},
{
  "id": "notes-week-03-3-5-1-3",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-3-5-1-3",
  "type": "Example",
  "number": "48",
  "title": "",
  "body": "  Analyze the horizontal asymptotes of the following functions.      and               and     "
},
{
  "id": "notes-week-03-3-6-1",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-3-6-1",
  "type": "Example",
  "number": "49",
  "title": "",
  "body": "  Compute    "
},
{
  "id": "notes-week-03-3-7-1",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-3-7-1",
  "type": "Example",
  "number": "50",
  "title": "",
  "body": "  Investigate and for the function .   "
},
{
  "id": "notes-week-03-3-8-1",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-3-8-1",
  "type": "Example",
  "number": "51",
  "title": "",
  "body": "  Evaluate .   "
},
{
  "id": "notes-week-03-3-9-1",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-3-9-1",
  "type": "Example",
  "number": "52",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "notes-week-03-4-2",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-4-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   Determine all vertical and horizontal asymptotes of functions    "
},
{
  "id": "notes-week-03-4-4-1",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-4-4-1",
  "type": "Example",
  "number": "53",
  "title": "",
  "body": "  Find all horizontal and vertical asymptotes of the function . Use this information to draw a rough sketch of the graph of this function.   "
},
{
  "id": "notes-week-03-4-5-1",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-4-5-1",
  "type": "Example",
  "number": "54",
  "title": "",
  "body": "  Determine all vertical and horizontal asymptotes of the function .   "
},
{
  "id": "notes-week-03-4-6-1",
  "level": "2",
  "url": "notes-week-03.html#notes-week-03-4-6-1",
  "type": "Example",
  "number": "55",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "wksht-graphing-equations",
  "level": "1",
  "url": "wksht-graphing-equations.html",
  "type": "Worksheet",
  "number": "",
  "title": "Limit of Sine x over x",
  "body": " Limit of Sine x over x       Dates  Assigned Date: September 1, 2026  Due Date: September 8, 2026    Objective  In this activity, we'll explore the special limit using the area of the unit circle.    Helpful Fact  There is a formula for the area of a triangle when you know two adjacent sides and the angle between them: .         What is the area of the unit circle? (Yes, it is that easy.)           We can try to approximate this area by cutting the circle into triangles. This diagram cuts the unit circle into four triangles and then pulls one of the triangles out independently. For this partition of the circle:     Find the angle .      Find the area of one of the triangles.      Find the total area of all 4 triangles put together.        n=4           1    1    \\theta           Now, we'll do the same thing again with 6 triangles.  For this partition of the circle:     Find the angle .      Find the area of one of the triangles.      Find the total area of all 6 triangles put together.        n=6           1    1    \\theta           Finally, to generalize this, we want to assume we have some large number of triangles. All of your answers below will involve .  For this partition of the circle:     Find the angle .      Find the area of one of the triangles.      Find the total area of all triangles put together.        n=12           1    1    \\theta          Now, to put all of this together. Ideally, if we keep taking more and more triangles, we get an area that is closer and closer to that of the circle. You should be able to see that in the images above. Therefore, if we take our expression above and take the limit as goes to infinity, we should get the area of the circle. Write out what this says.      To make this match with what we saw in the book, we make one more change. Let so that . Plug this in to your previous answer and manipulate to get the special limit mentioned at the top of this worksheet.    "
},
{
  "id": "wksht-graphing-equations-3",
  "level": "2",
  "url": "wksht-graphing-equations.html#wksht-graphing-equations-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  What is the area of the unit circle? (Yes, it is that easy.)       "
},
{
  "id": "wksht-graphing-equations-4-1",
  "level": "2",
  "url": "wksht-graphing-equations.html#wksht-graphing-equations-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  We can try to approximate this area by cutting the circle into triangles. This diagram cuts the unit circle into four triangles and then pulls one of the triangles out independently. For this partition of the circle:     Find the angle .      Find the area of one of the triangles.      Find the total area of all 4 triangles put together.    "
},
{
  "id": "wksht-graphing-equations-5-1",
  "level": "2",
  "url": "wksht-graphing-equations.html#wksht-graphing-equations-5-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Now, we'll do the same thing again with 6 triangles.  For this partition of the circle:     Find the angle .      Find the area of one of the triangles.      Find the total area of all 6 triangles put together.    "
},
{
  "id": "wksht-graphing-equations-6-1",
  "level": "2",
  "url": "wksht-graphing-equations.html#wksht-graphing-equations-6-1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Finally, to generalize this, we want to assume we have some large number of triangles. All of your answers below will involve .  For this partition of the circle:     Find the angle .      Find the area of one of the triangles.      Find the total area of all triangles put together.    "
},
{
  "id": "wksht-graphing-equations-7",
  "level": "2",
  "url": "wksht-graphing-equations.html#wksht-graphing-equations-7",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Now, to put all of this together. Ideally, if we keep taking more and more triangles, we get an area that is closer and closer to that of the circle. You should be able to see that in the images above. Therefore, if we take our expression above and take the limit as goes to infinity, we should get the area of the circle. Write out what this says.   "
},
{
  "id": "wksht-graphing-equations-8",
  "level": "2",
  "url": "wksht-graphing-equations.html#wksht-graphing-equations-8",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  To make this match with what we saw in the book, we make one more change. Let so that . Plug this in to your previous answer and manipulate to get the special limit mentioned at the top of this worksheet.   "
},
{
  "id": "wksht-indet-limits",
  "level": "1",
  "url": "wksht-indet-limits.html",
  "type": "Worksheet",
  "number": "",
  "title": "Indeterminate Limits",
  "body": " Indeterminate Limits       Dates  Assigned Date: September 8, 2026  Due Date: September 9, 2026    Objective  In this activity, you will get some practice computing limits. Some will use the direct substitution properly, but others will be indeterminate and will need algebraic simplification to properly solve. The last section of this worksheet will need to be written up and turned in.    Remark  Make sure you pay proper attention to your formatting and notation. This will be necessary throughout this course, and the earlier you get used to it, the better. Most of the grading on this assignment will be focused on this proper write-up of solutions.         In-Class Work  Compute each limit as specified below. Make sure you use proper notation in writing out your work. These problems will not need to be turned in but should be completed for practice.      .           .             .           .            .           for .           and for .            Homework  Make a careful write-up computing each of the limits below and upload your submission to the assignment on Canvas.     .           .           for .          "
},
{
  "id": "wksht-indet-limits-3-1-3-1",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-3-1-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "   .       "
},
{
  "id": "wksht-indet-limits-3-1-3-2",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-3-1-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "   .       "
},
{
  "id": "wksht-indet-limits-3-1-4-1",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-3-1-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "   .       "
},
{
  "id": "wksht-indet-limits-3-1-4-2",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-3-1-4-2",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "   .       "
},
{
  "id": "wksht-indet-limits-3-1-5",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-3-1-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "   .       "
},
{
  "id": "wksht-indet-limits-3-1-6",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-3-1-6",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "   for .       "
},
{
  "id": "wksht-indet-limits-3-1-7",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-3-1-7",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "   and for .       "
},
{
  "id": "wksht-indet-limits-4-1-3",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-4-1-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "   .       "
},
{
  "id": "wksht-indet-limits-4-1-4",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-4-1-4",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "   .       "
},
{
  "id": "wksht-indet-limits-4-1-5",
  "level": "2",
  "url": "wksht-indet-limits.html#wksht-indet-limits-4-1-5",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "   for .       "
},
{
  "id": "wksht-horiz-vert-asympt",
  "level": "1",
  "url": "wksht-horiz-vert-asympt.html",
  "type": "Worksheet",
  "number": "",
  "title": "Horizontal and Vertical Asymptotes",
  "body": " Horizontal and Vertical Asymptotes     Dates  Assigned Date: September 15, 2026  Due Date: September 21, 2026   Objective  In this activity, you'll investigate horizontal and vertical asymptotes of functions. Make sure you use proper notation and reasoning when trying to find these asymptotes. Your work will be graded both on correct answers and proper logic to get to them.        In-Class Work  For each function below, find all vertical and horizontal asymptotes. Determine the behavior of each function near any vertical asymptotes. Afterwards, use this to draw a sketch of the graph of this function. Check your answer against Desmos or a graphing calculator! These should be completed for practice but will not need to be turned in.                                                       Homework  The following problems will need to be written up carefully and turned in to the assignment on Canvas by the due date at the top of the first page.    Find all horizontal and vertical asymptotes of the function . Make sure you show all of the appropriate calculations to verify that these are the asymptotes.      Find all horizontal and vertical asymptotes of the function . Make sure you show all of the appropriate calculations to verify that these are the asymptotes.      "
},
{
  "id": "wksht-horiz-vert-asympt-3-1-3",
  "level": "2",
  "url": "wksht-horiz-vert-asympt.html#wksht-horiz-vert-asympt-3-1-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "wksht-horiz-vert-asympt-3-1-4",
  "level": "2",
  "url": "wksht-horiz-vert-asympt.html#wksht-horiz-vert-asympt-3-1-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "wksht-horiz-vert-asympt-3-1-5",
  "level": "2",
  "url": "wksht-horiz-vert-asympt.html#wksht-horiz-vert-asympt-3-1-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "wksht-horiz-vert-asympt-3-1-6",
  "level": "2",
  "url": "wksht-horiz-vert-asympt.html#wksht-horiz-vert-asympt-3-1-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "wksht-horiz-vert-asympt-3-1-7",
  "level": "2",
  "url": "wksht-horiz-vert-asympt.html#wksht-horiz-vert-asympt-3-1-7",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "      "
},
{
  "id": "wksht-horiz-vert-asympt-3-1-8",
  "level": "2",
  "url": "wksht-horiz-vert-asympt.html#wksht-horiz-vert-asympt-3-1-8",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "      "
},
{
  "id": "wksht-horiz-vert-asympt-3-1-9",
  "level": "2",
  "url": "wksht-horiz-vert-asympt.html#wksht-horiz-vert-asympt-3-1-9",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "wksht-horiz-vert-asympt-4-1-3",
  "level": "2",
  "url": "wksht-horiz-vert-asympt.html#wksht-horiz-vert-asympt-4-1-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "  Find all horizontal and vertical asymptotes of the function . Make sure you show all of the appropriate calculations to verify that these are the asymptotes.   "
},
{
  "id": "wksht-horiz-vert-asympt-4-1-4",
  "level": "2",
  "url": "wksht-horiz-vert-asympt.html#wksht-horiz-vert-asympt-4-1-4",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  Find all horizontal and vertical asymptotes of the function . Make sure you show all of the appropriate calculations to verify that these are the asymptotes.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Blank Homework",
  "body": " Blank Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
