# URL Shortener

![Screenshot](screenshot-url-shortener.png)

A URL Shortener built with React, Flask, and Tailwind CSS. The code is written in JavaScript and Python.

# Development

Starting the backend server for local development.
1. Create a python virtual environment.
2. Install the python modules found in 'requirements.txt' using pip.
3. 'flask run' to start up the backend server.

Starting the frontend server for local development.
1. 'npm install'
2. 'npm start'

To create a production ready build, use 'npm run build'.

Follow the steps found here: [Building a Python 3 App on App Engine](https://cloud.google.com/appengine/docs/standard/python3/building-app)

The web application is intended to be deployed on a [Google App Engine](https://cloud.google.com/appengine) instance. You can start the application using the following command.

```bash
gcloud app deploy app.yaml api/backend.yaml dispatch.yaml
```
