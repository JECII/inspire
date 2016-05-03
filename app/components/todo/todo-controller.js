app.controller('TodoController', function (TodoService) {
	var tc = this;
	tc.todos = TodoService.getTodos();
	// DO NOT EDIT ABOVE	
 tc.test = 'some value'
	tc.todoList = tc.todos

 
tc.todoAdd = function(TodoService) {
        tc.todoList.push(tc.todoInput);
        tc.todoInput = "";
    };

    tc.remove = function() {
        var oldList = tc.todoList;
        tc.todoList = tc.todos;
        angular.forEach(oldList, function(x) {
            if (!x.done) tc.todoList.push(x);
    
    
        });
    
    
    };
});