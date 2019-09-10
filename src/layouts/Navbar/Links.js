class Link {
  constructor(title, url) {
    this.title = title;
    this.url = url;
  }
}
export default [
  new Link('Home', '/'),
  new Link('ToDo', '/todo'),
  new Link('About Us', '/about-us')
];
