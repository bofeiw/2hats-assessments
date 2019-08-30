use smart_contract_macros::smart_contract;

use smart_contract::log;
use smart_contract::payload::Parameters;
use std::collections::VecDeque;

struct Todo {
    content: String,
    done: bool
}

struct TodoList {
    logs: VecDeque<Todo>
}

const MAX_LOG_CAPACITY: usize = 20;
const MAX_MESSAGE_SIZE: usize = 250;

fn prune_old_todos(list: &mut TodoList) {
    if list.logs.len() > MAX_LOG_CAPACITY {
        list.logs.pop_front();
    }
}

#[smart_contract]
impl TodoList {
    fn init(_params: &mut Parameters) -> Self {
        Self { logs: VecDeque::new() }
    }

    fn add_todo(&mut self, params: &mut Parameters) -> Result<(), String> {
        let todo = Todo { content: params.read(), done: false };

        // Ensure that todo contents are not empty.
        if todo.content.len() == 0 {
            return Err("Message must not be empty.".into());
        }

        // Ensure that content are at most 240 characters.
        if todo.content.len() > MAX_MESSAGE_SIZE {
            return Err(format!("Message must not be more than {} characters.", MAX_MESSAGE_SIZE).into());
        }

        // Push todo into list.
        self.logs.push_back(todo);

        // Prune old todos if necessary.
        prune_old_todos(self);

        Ok(())
    }

    fn remove_todo(&mut self, params: &mut Parameters) -> Result<(), String> {
        let target:usize = params.read();
        if target < self.logs.len() {
            self.logs.remove(target);
        }
        else {
            return Err("Index out of bounds.".into());
        }
        Ok(())
    }

    fn toggle_todo(&mut self, params: &mut Parameters) -> Result<(), String> {
        let target:usize = params.read();
        if target < self.logs.len() {
            let target_ref = &mut self.logs[target];
            target_ref.done = !target_ref.done;
        }
        else {
            return Err("Index out of bounds.".into());
        }
        Ok(())
    }

    fn get_todos(&mut self, _params: &mut Parameters) -> Result<(), String> {
        let mut todos = Vec::new();

        for todo in &self.logs {
            todos.insert(0, format!("<{}> {}", todo.content, todo.done));
        }

        log(&todos.join("\n"));

        Ok(())
    }
}