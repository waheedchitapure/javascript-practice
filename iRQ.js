



// 3. Can web browsers read JSX directly? 

Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel


// 4. What is the virtual DOM?


DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.


React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.

