var Generator = require('yeoman-generator');

const paths = [
  'Card.js.template',
  'ConfigurePage.js.template'
];

module.exports = class extends Generator {
  async prompting(){
    this.answers = await this.prompt([
      {
        type: "input",
        name: "serviceName",
        message: "Your new service name",
        default: "newService"
      }
    ]);
  }
  writing() {
    paths.forEach(path => {
      const folderName = this.answers.serviceName.toLowerCase();
      const templateFile = path.split(".");
      const suffix = templateFile.slice(0, -1).join(".");
      const serviceName = this.answers.serviceName.charAt(0).toUpperCase()+this.answers.serviceName.slice(1);
      this.fs.copyTpl(
        this.templatePath(path),
        this.destinationPath(
          folderName
          +'/'
          +serviceName+suffix),
        { serviceName: serviceName }
      );
    }) 
  }
};