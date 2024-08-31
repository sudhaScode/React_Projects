Summary
Node.js is a backend JavaScript runtime environment to to execute JS code without a browser

You can use it to build to web server that listens for client requests and responds to it

Node’s built-in http module’s createServer() method can be used to create an HTTP server

The createServer() method accepts a callback function with two parameters, request and response

request denotes the incoming request object

response denotes the response object which will be send back to the client

The callback function gets executed every time a new request is received

The request object has properties like

method - type of HTTP request method

url - path of the resource requested for

headers - request headers

You can use these values to conditionally respond to the requests based on the request properties like HTTP method, path or headers

The response object methods can be used to set the response

To set a response status code and headers, use the writeHead() method exposed by the response object. Eg: response.writeHead(200, { 'Content-Type': 'text/html' });

write() method accepts the text to be sent as response body

end() method tells the server the request has been completed

To bind the HTTP server created using createServer() to a specific port, use the listen() method

It also accepts a callback function which gets executed only once when the server is started
To read data sent as request body, use the request object’s data and end events

data event is triggered if there’s data remaining in the stream to be read

end event is triggered if the request data stream is empty

NPM is a repository for JavaScript packages.

You can use npm install to download your project dependencies from the NPM registry

The package.json file can be used to specify your project dependencies using its dependencies field

Express.js is a Node framework for creating web applications and APIs

You create an Express application handler by const express = require(‘express’); const app = express()

It provides methods for each of the HTTP request method types like

app.get() for GET request

app.post() for POST request

app.all() is a special method that listens to all HTTP request types to a particular path

To specify the callback for a particular route, let’s say GET request to /user, you do app.get("/user", callbackFunction)

Using Express’s inbuilt json middleware, we can directly parse the JSON request body as a JavaScript object.

To do that, add app.use(express.json()) before any routes

You can use for example, request.body.jsonProperty1 to fetch a property in your request body, "jsonProperty1"

The response object’s methods to use are

status() - to set the response status code

send() - send response body data

end() - trigger end of response