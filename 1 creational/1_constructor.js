class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getURL() {
    return `https://${this.ip}:8080`;
  }
}

const aws = new Server("Test", "87.45.12.45");
console.log(aws.getURL());