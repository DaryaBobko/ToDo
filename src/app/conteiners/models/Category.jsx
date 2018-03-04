export class Category {
  constructor(name, id, taskList) {
    this.name = name;
    this.id = id;
    this.subCategories = [];
    this.taskList = taskList;
  }
}