const { addTask, deleteTask, editTask } = require('../script');

test('Add task', () => {
  expect(addTask("DevOps")).toContain("DevOps");
});

test('Delete task', () => {
  addTask("Test");
  expect(deleteTask(0).length).toBe(0);
});

test('Edit task', () => {
  addTask("Old");
  expect(editTask(0, "New")[0]).toBe("New");
});
