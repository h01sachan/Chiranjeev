# Project : Chiranjeev
# Frontend Repo : 
https://github.com/UjjwalSingh1908/chiranjeev
# Inspiration : 
When we all thought the pandemic was over, we were hit by it with a greater force. Each day the number of cases is increasing and with an increase in the number of people getting infected, it’s getting very hard to find hospitals with beds, ventilators, and the number of vaccines available in hospitals. <br>
Also, there is a huge need for plasma donation in every hospital, and thus an urgent need to make people aware of the process.
# What it does : 
We aim to provide a Web App through which people can see the number of hospitals having free beds ( with or without ventilators ) and are vaccinating people or not. <br>
People can also volunteer themselves for plasma donation and provide space to convert into covid centers through the web App.<br>
On the other hand, Hospitals can register themselves in the app and request plasma donations by the recovered patients and for extra spaces needed for the patients. 
# How we built it
The frontend was implemented in react.js, using Figma for design and layout, and Axios to consume the backend.<br>
The backend was developed in node.js and express.js. Using some middlewares like jwt, to generate tokens, cors to enable the external ports for the frontend. And we keep the information in a NoSQL database, MongoDB.
# Screenshots of the project:
## Landing Page
![screencapture-localhost-3000-2021-05-16-18_11_20](https://user-images.githubusercontent.com/56830512/118397719-0ff2d980-b673-11eb-90bc-75c0d6143c5f.png)
## Hospital Dashboard
![screencapture-localhost-3000-hospital-home-2021-05-16-18_13_40](https://user-images.githubusercontent.com/56830512/118397767-4fb9c100-b673-11eb-88d7-57a3b81471ab.png)
## Edit Detail
![screencapture-localhost-3000-hospital-editdetails-2021-05-16-18_14_03](https://user-images.githubusercontent.com/56830512/118397771-534d4800-b673-11eb-9cb0-11450ac7daa7.png)
## Find Hospital For Patient
![screencapture-localhost-3000-patienthome-2021-05-16-18_11_48](https://user-images.githubusercontent.com/56830512/118397775-55afa200-b673-11eb-8146-4048c01000a4.png)
## Donate Beds
![screencapture-localhost-3000-providebeds-2021-05-16-18_20_35](https://user-images.githubusercontent.com/56830512/118397794-71b34380-b673-11eb-9b1c-e9147304bd99.png)

# Installation
1. Clone repository:
```bash
$ https://github.com/h01sachan/Chiranjeev.git
```

2. Install dependencies:

```bash
$ npm i
```
3. Open `.env` and edit config, if it's necessary.(Put your atlas uri in backend)

4. Run example:
```bash
npm start
```





