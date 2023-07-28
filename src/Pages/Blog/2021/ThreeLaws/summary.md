[home](../../index) | [blogs](../../blogs)

# Three software laws every Agile team should know
## 2021/05/09

This is by no means an exhaustive list but here's a few I like to know by heart and why they are useful to teams I'm a part of.

## Little's Law

John Little's theorem published initially in 1954. The theory in a nutshell states that work in progress (L) is equal to the throughput (λ) times the lead time (W). This is expressed algebraically as...

L = λW

I'm going to leave real numbers and calculations as an exercise to the reader and point out that the interesting consequence of this theory is that increasing work in progress (L) will always increase lead time (W).

When managers see higher than desired lead times their reaction is commonly to push more work onto the team so that it will be completed on time. This ends up having the opposite effect; now the timelines for earlier work have been jeopardized.

Understanding Little's Law can help us work at both a sustainable pace and reduce our lead times. Optimistically, we can use this to teach managers but is also useful for internal planning. Do we have multiple competing goals or priorities happening at once? Did we establish WIP limits for the actual work? 

## Conway's Law

Initially named after Melvin Conway who created the idea in 1967. The adage follows...

> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.

This one is harder to conceptualize but everyone will have experienced this sort of disfunction at some point in their careers.

A simple example is a team that needs to build a web application but in order to meet the business requirements they must interface with a different team for the data and a different team for the user interface.

The resulting design produced will end up looking nearly identical to how these three teams communicate with each other. The team building the web application will have interfaces that talk to the team that has the data and the same team will have interfaces so that the user interface team can communicate with the web application. Below is a little attempt at showing this graphically

Organizational chart:

User Interface Team <-> Web App Team <-> Data team

Software Design:

User Interface <-> Web App <-> Data

Now, it's important to note that the flaw here isn't necessarily _of_ the design but _in_ the design. The process and work overhead to accomplish business capabilities will be expensive. What happens when a customer wants a button to do some back-end work and populate data? Three teams must come together and negotiate interfaces and contracts on how to achieve this goal.

With an understanding that Conway's law is inevitable, we can build teams around business capabilities instead of technical abilities. This allows less overhead, less monolithic implementation, and allows the design to flex and evolve.

## Brooke's Law

Invented by Fred Brooks in the 1975 book _The Mythical Man-Month_. The following is stated...

> Adding manpower to a late software project makes it later

This is somewhat of an oversimplification and there are exceptions. For example, aggressive deadlines that did not have any basis on real world business impact (i.e fake dates) means the project may not be late at all, so manpower can be added.

The temptation to add people late stems from a misunderstanding of how work happens. Mushroom managers tend to treat all developers as hammers and all problems as nails. Developers require no ramp up or learning time and hiring them is no harder a task than buying a hammer.

The takeaway for us is that giving the manager control of the quality while the team remains accountable for it creates a lose-lose situation for the team. The best way to win here is not to play. We are happy to be transparent and we can negotiate scope but we are stringent on our quality and do not relax standards to meet a deadline.