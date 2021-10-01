# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: props is short for properties. They are basically keys and values passed down from a parent component to a child component. They are referred to either as just props or functional props. To pass props from a parent to a child, you must add the prop to the child component call within the parent component as follows:
  <Child
    propName = {}
  />
  and then refer to it in the child component as {this.props.propName} .

  Researched answer: As above, props is referring to properties and are used to pass data between components. Specifically, they are used to pass information from parent to child. They are also read-only meaning that the data the parent is passing into the child component should not be changed by the child. We can either use props to pass in values or methods. They are considered a snapshot of a state.  



2. What is a DOM event?

  Your answer: A DOM event is however the user interacts with the page. It just represents a change occuring in the web browser.

  Researched answer: DOM events are interactions from the user including but not limited to hovering or clicking on elements and typing inputs within forms. Events are referred to as the "firing of signals" to indicate that something is changing and an event is occurring.



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-orientated programming or OOP refers to a model of programming where everything you interact with is an object. This is in contrast with functional programming that usually just uses functions. 

  Researched answer: As above, OOP is programming model that utilizes classes and objects. It was created to handle large and complex software systems and sets of changeable data. It allows us to create more general and reusable pieces of code. Functional programming uses functions, logic, and also avoids changing state. It follows the same principle of also being a reusable generic piece of code that changes output only if inputs change. Apparently some differences between the two are:
  - For iteration, OOP uses loops and functional programming uses recursion.
  - Functional Programming uses variables and functions while OOP uses objects and methods.
  - OOP is best used when your operations are fixed and repetivive (adding new things rather than new processes)
  - Functional is best used when you need many processes on a few things (adding new processes rather than new things)


4. What is the difference between a Float and an Integer in Ruby?

  Your answer: A float is referring to a decimal and an Integer is referring to a whole number. You can force floats by including them in operators with Integers.

  Researched answer: Floats have decimals points while Integers are whole numbers.Integers can be positive, negative, or 0. Interestingly enough, Ruby will let you use underscores as commas when referencing large integers i.e. 1,000,000 -> 1_000_000. In reference to Floats, it seems there is a precision aspect. 'Float' is technically considered imprecise (i.e. 0.2 + 0.1 == 0.3 will return false because the result of those sum of numbers is technically 0.30000000000000004). We should use BigDecimal by wrapping each decimal as follows (BigDecimal("0.2") + BigDecimal("0.1") == 0.3) but important to note that it is 12x slower than just using Float.

  //just to note the decimal examples were found here: https://www.rubyguides.com/2016/07/numbers-in-ruby/ hopefully it is okay that I added some similar phrases from this resource since it is already pretty concise and has some interesting information.


5. Ruby has an implicit return. What does that mean?

  Your answer: Ruby's implicit return refers to it's ability to just return the last part of the inner code within the function. So specifically it does not need a return statement.

  Researched answer: As mentioned above, Ruby does not need a keyword return. It will just return the value of the last line of the method automatically.



## Looking Ahead: Terms for Next Week

1. Instance Variable: An instance variable is denoted with an @ sign which is used to show that it belongs to a specific instance of a class (aka object). It is an instance variable used to store data and can be different for different objects even if they are in the same class. They initialize with nil, are by default private, do not need declaration, and can only be accessed by instance methods of that same object.

2. PostgreSQL: Firstly, SQL stands for Structured Query Language. PostgreSQL is usually just referred to as postgres. It is an open-source, object orientated, database management system. It evolved from the Ingres project from UC Berkeley. It is used to store and retrieve data securely while supporting best practices. 

3. Ruby on Rails: Ruby on Rails is an open-source software used to build web applications. It uses a Model-view-controller software design pattern with 3 connected elements (as stated in the name the model, view, or controller). Model is the central component that manages data, logic, and rules of the app. With the use of Active record, we can represent the data as objects. View is the display of information regarding the appplication's resources and is made up of templates. Controller accepts input and converts to commands for either the model or view. Specifically, it handles Hypertext Transfer Protocol (HTTP) requests.    

4. ORM: ORM is an acronym for Object-relational mapping. It allows you to pull and manipulate data from a database using an object-orientated model. It is usually referenced as "an ORM" because it refers to a library written in any choice language to manipulate data. It lets developers query a database without having to use database query commands.

5. Active Record: Active Record is an ORM for Rails. It is in the Ruby language and is used in the model layer of the MVC model. 
