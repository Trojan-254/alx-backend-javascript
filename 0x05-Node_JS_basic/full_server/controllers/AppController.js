/**
 * Contains the miscellaneous route handlers.
 * @author Samwuel Simiyu <https://github.com/Trojan-254>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
