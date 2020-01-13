# Readings: Authentication

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

**For your assignment, go through the reading material and watch/bookmark the additional resources resources provided. Create a wiki entry in your fork of the class repo that summarizes the principle reading topic as though you were presenting the material to a new developer.**

Wiki Entry Ideas:

- Blog Article (2-3 paragraphs with code sample)
- Dictionary / Flash Cards
- Notes in outline form

## Reading

### User Modeling

Modern web applications need to model sensitive information about their users. When a users provides an applications with sensitive information, they are trusting that it will not be leaked are misused. This means that it is a developers responsibility to store that information responsibly. Some information, like emails, user names, and addresses can be stored in plain text, as long as the database is password protected and/or behind a firewall. Other information, like a users password, should be encrypted using a hashing algorithm before it is ever stored. this prevents anyone (including developers with database permissions) from ever getting access to their password.

User models that have sensitive data that should **NEVER** be sent to client applications. If your application requires that users be able to read each others personal information, create a second Profile model to hold that data and strictly limit access to the Profile model. Safely using a second model will ensure that no users will accidentally (or maliciously) get access to sensitive information.

### Cryptography

Cryptography is the science which studies methods for encoding messages so that they can be read only by a person who knows the secret information required for decoding, called the key; it includes cryptanalysis, the science of decoding encrypted messages without possessing the proper key, and has several other branches.

[GNU Collaborative International Dictionary of English](http://gcide.gnu.org.ua)

### Hash Algorithms

A Cryptographic Hash Algorithm takes a piece of data and produces a hash that is deliberately difficult to reverse. If identical data is passed into the algorithm the same hash will always be produced. Hash algorithms are often used for checking the integrity of data.

In a User model, a hash password can be stored when the user signs up. When the user needs to login, they can resend their password and the server can hash the login password using the same hash algorithm. The server can then compare the hashed login password with previously stored hashed password to determine if the user should be authenticated.

### Cypher Algorithms

A Cryptographic Cypher Algorithm takes a piece of data and a key and produces encrypted data. Later the encrypted data can be reversed into the original data by decrypting it using the same key.

User tokens can be created by associated a random unique string (tokenSeed) with a user account and, in turn, encrypting the tokenSeed with a secret key that only the server knows. We can then send the encrypted token to a client application. When the client makes a future request they send back the token. The server can reverse the token into the tokenSeed by decrypting it with the secret key. This is because the tokenSeed was unique to the database and can be queried to produce the user who made the request.

### Basic Authorization

Basic Authorization is a common method used to send a username and password in an HTTP request. The username and password are joined with a ':' then "base64 encoded" and placed after the string 'Basic '. The resulting string is set to the value of an Authorization header.

A Server can decode the Basic Authorization header to retrieve the username and password. If the combination is validated, the server generally responds back to the client with some sort of validation response (token or key) so that the client can re-authenticate without having to continually send the username:password combination in plain text over the internet.

> NOTE: base64 encoding is not a form of encryption. The client and server must use HTTPS to protect the username and password as it travels across the network.

In browers, we get `atob` and `btoa` to convert to/from "Base64 Encoding"

``` javascript
let encoded = window.btoa('someusername:P@55w0rD!')
// c29tZXVzZXJuYW1lOlBANTV3MHJEIQ==

let decoded = window.atob('c29tZXVzZXJuYW1lOlBANTV3MHJEIQ==');
// someusername:P@55w0rD!

request({
  method: 'GET',
  url: 'https://api.example.com/login',
  headers: {
    Authorization: `Basic ${encoded}`,
  },
})
.then(handleLogin)
.catch(handleLoginError)
```

In a node application, we can use a node module to do the same work (those methods are not built-in)

```javascript
let base64 = require('base-64');

let string = 'someusername:P@55w0rD!';
let encoded = base64.encode(string); // c29tZXVzZXJuYW1lOlBANTV3MHJEIQ==
let decoded = base64.decode(encoded); // someusername:P@55w0rD!
```

## Additional Resources

### Videos

### Bookmark / Skim

- [securing passwords](http://dustwell.com/how-to-handle-passwords-bcrypt.html)
- [basic auth](https://en.wikipedia.org/wiki/Basic_access_authentication)
- [intro to jwt](https://jwt.io/introduction/)
- [OWASP auth cheatsheet](https://www.owasp.org/index.php/Authentication_Cheat_Sheet)
- [bcrypt docs](https://www.npmjs.com/package/bcrypt)
