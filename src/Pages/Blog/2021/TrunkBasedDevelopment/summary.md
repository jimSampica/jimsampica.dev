[home](../../index) | [blogs](../../blogs)

# Trunk Based Development is Lean
## 2021/04/20

Git is great as a version control system but developers tend to over complicate their needs when branching. Worse, team branching strategies tend to follow the organizational chart (think Dev/Qa/Ops) which build bottlenecks into the workflow.

When changes need to ride up and down branches, go into certain branches but stay out of others, and be integrated with each other it is hard to get work done. Developers hate merging code together but will complicate their branching strategy to where every step necessitates it. _Merge Hell_ is this particular kind of disfunction.

A popular branching strategy that most developers don't need is [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/). This strategy is so popular it's become a cargo cult. There is nothing wrong with this strategy (actually it's quite good), but most teams and organizations do not need this.

Repeat this out loud and remember it... _I need a simple branching strategy that works for my workflow._

Thankfully, there is a _Lean_ solution. Most of your branches in your workflow are non-value adding. Remove those and you are left with the following...

![trunkBasedDev](./trunk1c.png)

The model above is all you need. That's it. Trunk Based Development is the _Lean_ branching strategy.

Code is integrated frequently. It doesn't need to ride branches up or down or be integrated multiple times. Depending on your workflow and scale even Release branches or branches off main are optional, simplifying this further.

This strategy _will_ work for almost every organization, small to large.

Chances are you work with branches every day so by simplifying your branching strategy you will see immediate results.

For more information visit [https://trunkbaseddevelopment.com/](https://trunkbaseddevelopment.com/) and start simplifying today.