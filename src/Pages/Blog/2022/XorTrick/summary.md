[home](../../index) | [blogs](../../blogs)

# Neat XOR trick (in C#)
## 2022/12/18

Most developers are familiar with the XOR operation but I want to demonstrate a little C# trick I learned from the StackOverflow chat (does this still exist?) some years ago.

XOR is not often explicitly used so it makes it somewhat obsure. Personally, Ive encountered the need to use it very little in the domains I've encountered. As a refresher, here is a truth table for the operation as a function of its inputs.

| a | b | result |
| ----------- | ----------- | ------- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

In C# there is a built-in XOR operator `^`. The truth table above can be reproduced through the following statement...

`var result = a ^ b;`

I haven't seen this operator used very often out in the wild. Because of this it can lead to confusion and the need to analyze it further than the usual operators. However, there's a little trick I learned that produces an equivalent result without the need to use it explicitly. The following statement shows this...

`var result = a != b;`

Now, first thing any developer of salt will say is "does this really produce the same result?" Let's find out using a truth table...

| a | b | result |
| ----------- | ----------- | ------- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

After some quick mental cycles, yes it does! So as much as I'd love to use the `^` operator I almost always fallback on `!=` to get the same result so that people reading my code can figure out what its doing without needing to lookup syntax.

I haven't tested this broadly but I suspect this is applicable to other "C"-like languages as well.