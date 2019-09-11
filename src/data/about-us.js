
class Person {
  constructor(name, imageURL, description) {
    this.name = name;
    this.imageURL = imageURL;
    this.description = description;
  }
}

export default [
  new Person('Dale Gordon', '/images/dale-about-us.png', 'JavaScript, music and hiking enthusiast'),
  new Person('Justin Hoffman', '/images/dale-about-us.png', 'Overall sick oak :D'),
];
