class Link {
  /**
     * Generate a new Link instance
     * @class
     * @param  {string} title The title to be displayed
     * @param  {string} url The destination of the link
     */
  constructor(title, url) {
    this.title = title;
    this.url = url;
  }
}
export default [
  new Link('Home', '/'),
  new Link('ToDo', '/todo'),
  new Link('About Us', '/about-us'),
];
