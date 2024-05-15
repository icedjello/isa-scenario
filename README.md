# What is this?

- A small project/showcase for a FinTech provider of workplace savings and pensions.

## What should it do?

- _The Company_ already offers ISAs and Pensions to employees of companies (employers) who have an existing arrangement with _The Company_.

- _The Company_ would like to be able to offer ISA investments to retail (direct) customers who are not associated with an employer.

- _The Company_ would like to keep the functionality for retail ISA customers separate from its Employer-based offering where practical.

- When customers invest into a _Company_ ISA they should be able to select a single fund from a list of available options. Currently they will be restricted to selecting a single fund however in the future we would anticipate allowing selection of multiple options.

- Once the customer’s selection has been made, they should also be able to provide details of the amount they would like to invest.

- Given the customer has both made their selection and provided the amount the system should record these values and allow these details to be queried at a later date.

- As a specific use case please consider a customer who wishes to deposit £25,000 into a _Company_ ISA all into the _Company_ Equities Fund.

## What to discuss?

- What you have done and why.

- The specific decisions you made about your solution.

- Any assumptions you have made in the solution you have presented.

- Any enhancements you considered but decided not to cover.

Initial thoughts:

- £25k is too high. The max UK allowance per year is £20k. This amount will need to be validated.

- The FE can check if the ISA amount is `> 20k` but this could be seen as business logic in the FE. A user could easily turn this check off and send the request.

- £20k is the total amount a user can submit across all ISAs per year. This will also have to be validated. If a user has already put £10k in a Vanguard ISA, their maximum amount will have to be £10k.

- Research suggests this will be up to the user to verify. The onus would not necessarily be on the company to check.

- To make an ISA account, a customer has to provide a National Insurance number. I'll assume this could be used to track a person's allowance, other accounts, etc.

- Did some extra research on this. It seems like it's up to the individual to ensure this.

- This is a bit of a mystery to me: "_The Company_ would like to keep the functionality for retail ISA customers separate from its Employer-based offering where practical."

- I know that _The Company_ offers a white-label product but I don't believe this is for employers.

- I will assume that individuals will be able to use their employees app to create an ISA.

- I will assume that users have already logged-in and made an account.

- I will assume that users HAVE NOT supplied their NI number yet.

Things to explain:

- the DB schema, seed etc.
- the api route.
