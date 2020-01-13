# Reading: OAuth

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

**For your assignment, go through the reading material and watch/bookmark the additional resources resources provided. Create a wiki entry in your fork of the class repo that summarizes the principle reading topic as though you were presenting the material to a new developer.**

Wiki Entry Ideas:

- Blog Article (2-3 paragraphs with code sample)
- Dictionary / Flash Cards
- Notes in outline form

## Reading

### OAUTH2.0

If you've ever seen and/or used the pop-up dialog box to "Login With Google" (or Facebook, or Github), you've used OAuth as a client (user). What's really going on? Officially, OAuth is "an open standard for access delegation" ... In other words, OAuth serves as a way to give users the ability to grant application access to services, without giving the application their password.

When you "Login with Google", you've actually given the application (or website) the keys to some of your personal information and access levels at Google. Generally, sites and apps use this as a simplified way of having you login through one system ... but if they've asked for it (and you agreed to it), the application can also do things such as create or delete documents or acess other services "as you". When you "Login with Google" the application that requested that, for all intents and purposes, **Is You** ... which means it can effictively do things at Google (or facebook, or wherever) as though it was you at the keyboard.

- What are some of the benefits as a client/user to using OAuth?
- As an application developer, why would you choose this over creating your own login system?

### How does OAuth work?

Through a series of "handshakes", an application such as an Express Web Server asks the user if it's ok to login as them at some remote service, and then begins the process of authentication and access.

1. Application spawns the "Login Using xxx" window, asking for specific permissions
1. User Agrees to allow this to happen
1. Remote service (i.e. Google) contacts the application with a one-time-use `Code`
1. The application calls back to a special address on the remote service to exchange that `Code` for a `Token`
1. Once the token has been granted, the application will then be able to contact the remote service, using that Token to access information on behalf of the user

**The `token`  is the user**

### Access Code

First the client needs to grant the application permission. To do this you need to provide an `<a>` tag that will take them to the service's authorization page. This `<a>` tag should pass the following information through a query string to the authorization server. Every service is slightly different in their specific requirements, but in some form or another, variables like these are part of this initial request

- `response_type=code` indicates that your server wants to receive an authorization code
- `client_id=<your client id>` tells the authorization server which app the user is granting access to
- `redirect_uri=<your redirect uri>` tells the auth server which server endpoint to redirect to
- `scope=<list of scopes>` tells the auth server what you want the user to give access to
- `state=<anything you want>` a place where you can store info to pass to your server if you want

### Access Token

If the users grants access to the application, the authorization server will redirect to a provided redirect URI callback with a "code". Once you have this code, you can exchange it for an access token by making a `POST` request to the authorization server and providing the following information:

- `grant_type=authorization_code`
- `code=<the code your received`
- `redirect_uri=REDIRECT_URI` must be same as the redirect URI your client provided
- `client_id=<your client id>` tells the authorization server which application is making the requests
- `client_secret=<your client secret>` authenticates that the application making the request is the application registered with the `client_id`
- Once you get an access token, you can use it to make API calls to the service on behalf of that user

## Additional Resources

### Read

- [OAuth2 simplified](https://aaronparecki.com/oauth-2-simplified/)

### Videos

- [What is OAuth Really All About?](https://www.youtube.com/watch?v=t4-416mg6iU)

### Bookmark / Skim

- [OAuth wiki](https://en.wikipedia.org/wiki/OAuth)
- [Build a Node API with OAuth](https://developer.okta.com/blog/2018/08/21/build-secure-rest-api-with-node)
