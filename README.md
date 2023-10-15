## Inspiration
In the modern age where connectivity reigns supreme, the need for innovative, user-centric, and reliable communication applications is unarguably evident. Identifying a significant gap in the market, we embarked on a mission to create Vero for Verizon, an intuitive, user-friendly platform designed to redefine the essence of digital communication. Their vision was to create a seamless integration between the users and the Verizon services, ensuring a flawless, interactive user experience. Try out Vero to see all the different and unique interactions it supports!

## What it does
Vero redefines digital convenience by harmonizing advanced technology with everyday user needs. Imagine this: a platform not just as a tool, but as a companion that communicates with you, engaging in full conversations. Vero is designed with a contemporary, clean interface that doesn't just sit pretty — it elevates user experience to new heights. It's intuitive, almost second nature, with voice recognition and responsive dialogue that feels like having a conversation with a savvy friend, one who's ready to dive deep into the nitty-gritty of your Verizon plans or just skim the surface, depending on what you need.

But the real game-changer? Its adaptability. Whether you're a talker, a typer, or someone who prefers a back-and-forth chat, Vero's got you covered. The AI doesn't just respond; it understands, learns, converses, and visualizes data in ways that are meaningful to you. Say goodbye to the days of sifting through FAQs or waiting on hold for customer service. With Vero, help is just a word away — literally. It's more than a digital hub; it's a dynamic, interactive ally in your pocket, transforming the way we think about what's possible with technology. So, whether you're managing your account, hunting for the latest deals, or in need of lightning-fast support, Vero's got your back — all you have to do is ask.

## How we built it
The website is built on Next.js using Typescript and hosted on Vercel. We utilized a number of AI APIs to be able to provide the user with a fluid experience. To generate the chats and card suggestions, we use GPT 3.5 and GPT 4. To give Vero a voice, we utilized Eleven Lab's API. To allow Vero to listen to you in real time, we utilized the Web Speech API which is built in to many browsers.

## Challenges we ran into
One of the largest challenges we ran to is allowing Vero to type and talk at the same time. We have to artificially generate Vero typing once we receive a response from GPT 3.5 to be able to sync it with Vero's voice.

## Accomplishments that we're proud of
We are very proud of how smooth the experience has turned out. Having a conversation is natural without having to physically interact with your computer. Using AI, we are to able to display in real time images and text that pertain with the conversation. 

## What we learned
We didn't have experience with implementing AI before this project. We both had to learn how to utilize multiple different APIs to create a new user experience like never before.

## What's next for Vero for Verizon
We hope that Verizon implements Vero as a new version of their account page. We think that implementing Vero would cause a higher custom retention rate and greater customer satisfaction.
