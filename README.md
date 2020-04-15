# RocketBox

RocketBox is a project developed at OmniStack 06 Week, which aims to develop a complete application with a Stack based fully in JS, using Node JS, React JS and React Native.
<br/>
For this, it was used the development arquiteture called MVC, which means a Model layer, a View Layer and a Controller layer. The V and C layers be on frontend development and the M layer be on backend development. So, the layers V and C are in distincts locales of the M layers!

## Features

This app features all the latest tools and practices in mobile development!

- ⚛️ **React Js** — A JavaScript library for building user interfaces
- ⚛️ **React Native** — A lib that provides a way to create native apps for Android and iOS
- 💹 **Node Js** — A web framework for Node Js
- 📄 **MongoDB** — A cross-platform and open-source document-oriented database
- ♻️ **Socket IO** — A library for realtime web applications 


This application was not completed, because there are some incompatibilities between the used libraries and the version of react-native (0.62.2).
Some of these are:

- Axios: It was not possible to post images, data is not sent, generating the Network Server error. This error, according to research on the internet, as in github issues, informs that the current version is really with this problem. Thus, as soon as a solution is found, the project will continue. It is noteworthy that it was also not possible to carry out the post with fetch, indicating possible other flaws and / or incompatibilities in the axes and / or in the multer, or even in the code itself developed.

- Date-fns: The distanceInWords function is no longer part of the lib. Despite this, another function was used to achieve the objective.

- React-Native-fs: The function is not compatible with version 0.62.2 of react native.

- React-Native-FileViewer: The function is not compatible with version 0.62.2 of react native.


However, the backend and web frontend have been completely development
