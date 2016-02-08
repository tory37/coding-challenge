Coding challenge or existing code?
==================================

The [coding challenge](coding_challenge.md) is optional if you already have
some code that you're proud of and can share with us.

Existing code
-------------

If you have existing code, please follow the following guidelines:

* Include a link to the hosted repository (e.g. Github, Bitbucket...). We cannot
  review archives or single files.
* The repo should include a README that follows the [principles described
  below](#readme) In particular, please make sure to include high-level
  explanation about what the code is doing.
* Ideally, the code you're providing:
  * Has been written by you alone. If not, please tell us which part you wrote
    and are most proud of in the README.
  * Is leveraging web technologies.
  * Is deployed and hosted somewhere.

Readme
------

Regardless of whether it's your own code or our coding challenge, write your
README as if it was for a production service. Include the following items:

* Description of the problem and solution.
* Whether the solution focuses on back-end, front-end or if it's full stack.
* Reasoning behind your technical choices, including architectural. Trade-offs
  you might have made, anything you left out, or what you might do differently
  if you were to spend additional time on the project.
* Link to other code you're particularly proud of.
* Link to your resume or public profile.
* Link to to the hosted application where applicable.

How we review
-------------

Your application will be reviewed by at least two of our engineers. The
aspects of your code we will judge include:

* Clarity: does the README clearly explains the problem and solution?
* Correctness: does the application do what was asked? If there is anything
  missing, does the README explain why it is missing?
* Code quality: is the code simple, easy to understand, and maintainable?  Are
  there any code smells or other red flags?
* Testing: how thorough are the automated tests? Will they be difficult to
  change if the requirements of the application were to change?
* UX: is the web interface understandable and pleasing to use?
* Technical choices: do choices of libraries, databases, architecture etc. seem
  appropriate for the chosen application?



Coding Challenge Guidelines
===========================

Please organize, design, test, document and deploy your code as if it were
going into production, then send us a link to the hosted repository (e.g.
Github, Bitbucket...).

Functional spec
---------------

Prototype **one** of the following projects:

1. Delivery Recommendation Service

The UX/UI is totally up to you. If you like, get creative and add additional
features a user might find useful!

### Delivery Recommendation Service

Given a data set of drivers and a data set of deliveries, write a RESTful service that implements
the following [Swagger specification](specs/delivery_recommendations.yaml) such that if every
driver accepted their first recommendation, all deliveries would be completed with least amount of
missed delivery commitments.


Technical spec
--------------

The architecture will be split between a backend and a web frontend, for
instance providing a JSON in/out RESTful API. Feel free to use any other
technologies provided that the general client/service architecture is
respected.

Choose **one** of the following technical tracks that best suits your skillset:

1. **Fullstack**: include both frontend and backend.
2. **Backend track**: include a minimal frontend (e.g. a static view or API
   docs). Write, document and test your API as if it will be used by other
   services.
3. **Frontend track**: include a minimal backend, or mock the data service. Focus on
making the interface as polished as possible.

### Backend

We believe there is no one-size-fits-all technology. Good engineering is about
using the right tool for the right job, and constantly learning about them.

Therefore, feel free to mention in your `README` how much experience you have
with the technical stack you choose, we will take note of that when reviewing
your challenge.

Here are some technologies we are more familiar with:

* JavaScript
* PHP
* Python

You are also free to use any web framework. If you choose to use a framework
that results in boilerplate code in the repository, please detail in your
README which code was written by you (as opposed to generated code).

### Frontend

The frontend should ideally be a single page app with a single `index.html`
linking to external JS/CSS/etc. You may take this opportunity to demonstrate
your CSS3 or HTML5 knowledge.

Host it!
--------

When you’re done, host it somewhere (e.g. on Amazon EC2, Heroku, Google
AppEngine, etc.).
