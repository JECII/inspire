app.controller('TodoController', function (TodoService) {
	var tc = this;
	tc.todos = TodoService.getTodos();
	// DO NOT EDIT ABOVE	
 tc.test = 'some value'
	tc.todoList =[]

 
tc.todoAdd = function(todo) {
        tc.todoList.push({todo, done:false});
        tc.todoInput = '';
    };

    tc.remove = function() { 
        var oldList = tc.todoList;
        tc.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) {tc.todoList.push(x)};
    
    
        });
    
    
    };
    
    
        
    
    
    
    
});