/**
 * Login Class
 */

function Login() {
        // sessionId -> user map
        this.sessionMap = {
                99999 : { name: 'Foo', email: 'foo@bar.com' }
        };

 }
 /**
  * Say Hello {name} to the user
  */
 Login.prototype.hello = function(sessionId) {
        return 'Hello ' + this.sessionMap[sessionId].name + '\n';

 };

 /**
  * Check whether the given session id is valid (is in sessionMap) or not.
  */
 Login.prototype.isLoggedIn = function(sessionId) {
        return sessionId in this.sessionMap;

 };

 /**
@@ -27,25 +23,27 @@ Login.prototype.isLoggedIn = function(sessionId) {
  */
 Login.prototype.login = function(_name, _email) {
    /*
        * Generate unique session id and set it into sessionMap like foo@bar.com
        */
        var sessionId = new Date().getTime();
        this.sessionMap[sessionId] = { name: _name, email: _email }

        console.log('new session id ' + sessionId + ' for login::' + _name);

        return sessionId;
 };

 /**
  * Logout from the server
 */


Login.prototype.logout = function(sessionId) {
        var session_ID = sessionId;
        delete this.sessionMap[session_ID];
        console.log('logout::' + session_ID);

        /*
        * TODO: Remove the given sessionId from the sessionMap
        */
};

Login.prototype.refresh = function(sessionId){

        var name = this.sessionMap[sessionId].name;
        var email = this.sessionMap[sessionId].email;

        delete this.sessionMap[sessionId];

        var newSession_ID = new Date().getTime();

        this.sessionMap[newSession_ID] = { name: name, email: email }
        console.log('name :: ' + name);
        console.log('email :: ' + email);
        console.log('new session id ' + newSession_ID + ' for login ::' + name);
        return newSession_ID;
};

// Export the Login class
module.exports = new Login();

                                                          
