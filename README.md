# Limited Todos

In this special type of todo lsit, user can only add upto 2 items.

The most recently added item is placed on top and replaces the last item on the list.

Accpetance Criteria:- <br/>
1) User will write input in <code>input#todo-input</code> <br/>
2) Upon clicking <code>button#add-todo</code>, a new li item is added inside <code>#items</code> ul. <br/>
3) Adter adding todo, clear the input. <br/>

Example:-
User adds "Learn C++", then "Learn Java"(gets on first position), and then they add "Learn JS",
so "Learn JS" item will be on top of list and "Learn C++" will be removed from list, and "Learn Java" will be on second position.
