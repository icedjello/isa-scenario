# What is this?

- A small project/showcase for a FinTech company that provides pensions & ISAs.

## How do I run it?

- do this...

## The Requirements

- _The Company_ already offers ISAs and Pensions to employees of companies (employers) who have an existing arrangement with _The Company_.

- _The Company_ would like to be able to offer ISA investments to retail (direct) customers who are not associated with an employer.

- _The Company_ would like to keep the functionality for retail ISA customers separate from its Employer-based offering where practical.

- When customers invest into a _Company_ ISA they should be able to select a single fund from a list of available options. Currently they will be restricted to selecting a single fund however in the future we would anticipate allowing selection of multiple options.

- Once the customer’s selection has been made, they should also be able to provide details of the amount they would like to invest.

- Given the customer has both made their selection and provided the amount the system should record these values and allow these details to be queried at a later date.

- As a specific use case please consider a customer who wishes to deposit £25,000 into a _Company_ ISA all into the _Company_ Equities Fund.

- **The suggested time for this project was between 4 & 6 hours.**

## What did I do & why?

This challenge was quite difficult because given the original assignment-copy I, a coded project wasn't the obvious solution. I was told I could respond with anything that I thought was appropriate. Since I'm not the best at Figma or writing up entire projects from scratch. I decided to create an prototype. Prototypes are flexible and extensible, you can change them on the fly and add bits when needed. In the past, I've built projects like this for UAT, so I think this'll do.

## The tech

I know the company uses TypeScript & React, so those were obvious choices. I was also told in an earlier interview that I could end up working on a web-only platform so I took that as license to _not worry about the designs working on mobile_. Furthermore, it was mentioned that _The Company_ has started experimenting with NextJS 14; I have also been learning NextJS, it has SSR, API-routing and is _the industry standard_. So NextJS was my meta-framework.
For styling I chose TailwindCSS because it's quick, syntactic and has great _Google-ability_ if/when I get stuck. As a utility I also installed Tailwind Merge because it's fantastic and actually helps me make my Tailwind more readable.
For a package manager I used pnpm because it's _performant_... Also because I have a lot of projects on my computer and pnpm helps reduce `node_modules/`-strain.  
Initially, I used `create next-app` to build the project, I wanted to eschew a database in favour of `fs` and good old-fashioned JS + JSON. But, even for the minimal functionality I needed, this would mean writing a lot of code. So instead I used `create t3-app` which allowed me to pick a pre-plumbed database(and Zod for safety!). I chose SQLite to keep things simple.

## Specific decisions

I wanted to keep things as simple as I could because this is already **a lot of work for six hours** so I made a couple of assumptions:

- Both employee & retail users will log in via the same platform so there is no need to keep things separated in this case. This is quite common among pension companies (Nest, Penfold).

- I will assume that users already have accounts and are logged in.

- Business logic will happen on the BE.

- I regretted this later but I only have two tables in my db, one called products (things that can be invested in) and one called investments (things that the user is invested in).

## If I had more time

- Add Storybooks!
- Add Tests E2E, Unit, Snapshot (where relevant)!
- Work on the schemas such that it makes better sense!
- Turn the entire new investment journey into a parallel path or component to cache data better!
- Refactor!

### Below were my initial thoughts:

I kept these for posterity.

- £25k is too high. The max UK allowance per year is £20k. This amount will need to be validated.

- The FE can check if the ISA amount is `> 20k` but this could be seen as business logic in the FE. A user could easily turn this check off and send the request.

- £20k is the total amount a user can submit across all ISAs per year. This will also have to be validated. If a user has already put £10k in a Vanguard ISA, their maximum amount will have to be £10k.

- Research suggests this will be up to the user to verify. The onus would not necessarily be on the company to check.

- To make an ISA account, a customer has to provide a National Insurance number. I'll assume this could be used to track a person's allowance, other accounts, etc.

- Did some extra research on this. It seems like it's up to the individual to ensure this.

- This is a bit of a mystery to me: "_The Company_ would like to keep the functionality for retail ISA customers separate from its Employer-based offering where practical."

- I know that _The Company_ offers a white-label product but I don't believe this is for employers.

- I will assume that individuals will be able to use their employees app to create an ISA.

- I will assume that users HAVE NOT supplied their NI number yet.
