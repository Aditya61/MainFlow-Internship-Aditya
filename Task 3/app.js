var PythonBook = {
    "Page1": 
    "<h3>Chapter 1 : Introduction to Python</h3>" +
    "<h4>What is Python?</h4>" +
    "<p>Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python's design philosophy emphasizes code readability with the use of significant indentation. Its syntax allows programmers to express concepts in fewer lines of code compared to languages such as C++ or Java.</p>" +
    "<h4>Key Features of Python</h4>" +
    "<ol>" +
        "<li>" +
            "<h5>Simple and Easy to Learn:</h5>" +
            "<p>Python's syntax is clear and intuitive, making it an excellent choice for beginners. The language's simplicity allows developers to focus on solving problems rather than understanding complex syntax.</p>" +
        "</li>" +
        "<li>" +
            "<h5>Interpreted Language:</h5>" +
            "<p>Python is an interpreted language, which means that code is executed line by line. This facilitates quick testing and debugging.</p>" +
        "</li>" +
        "<li>" +
            "<h5>Versatile and Portable:</h5>" +
            "<p>Python is cross-platform, running on Windows, macOS, Linux, and other operating systems. This versatility makes it suitable for a wide range of applications, from web development to scientific computing.</p>" +
        "</li>" +
        "<li>" +
            "<h5>Extensive Standard Library:</h5>" +
            "<p>Python comes with a comprehensive standard library that includes modules and packages for various tasks such as web development, data analysis, machine learning, and more. This extensive library reduces the need for writing code from scratch.</p>" +
        "</li>" +
        "<li>" +
            "<h5>Community Support:</h5>" +
            "<p>Python has a large and active community. This support network is invaluable for beginners seeking help and for experienced programmers looking to share knowledge and collaborate on projects.</p>" +
        "</li>" +
    "</ol>"
}

var JavaBook = {
    "Page1": 
    "<h3>Chapter 1 : Introduction to Java</h3>" +
    "<h4>What is Java?</h4>" +
    "<p>Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was developed by James Gosling at Sun Microsystems and released in 1995. Java is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.</p>" +
    "<h4>Key Features of Java</h4>" +
    "<ol>" +
        "<li>" +
            "<h5>Object-Oriented:</h5>" +
            "<p>Java is built around the concept of objects, making it easy to model real-world entities and relationships. This approach promotes code reusability and modularity.</p>" +
        "</li>" +
        "<li>" +
            "<h5>Platform-Independent:</h5>" +
            "<p>Java's platform independence is achieved through the use of the Java Virtual Machine (JVM). Code compiled into bytecode can run on any machine that has a JVM installed.</p>" +
        "</li>" +
        "<li>" +
            "<h5>Robust and Secure:</h5>" +
            "<p>Java emphasizes early error checking, runtime checking, and the elimination of error-prone situations. It includes strong memory management and provides a secure execution environment to protect against unauthorized access.</p>" +
        "</li>" +
        "<li>" +
            "<h5>Multithreaded:</h5>" +
            "<p>Java supports multithreading, which allows the concurrent execution of two or more threads. This is particularly useful for performing multiple tasks simultaneously within a program.</p>" +
        "</li>" +
        "<li>" +
            "<h5>Rich Standard Library:</h5>" +
            "<p>Java comes with an extensive standard library, providing a range of classes and methods for handling data structures, networking, input/output operations, graphical user interface (GUI) programming, and more.</p>" +
        "</li>" +
    "</ol>"
}

function BookPreview()
{
    const BookName = document.getElementById("BookName").value;
    const Preview = document.getElementById("Preview");
    Preview.innerHTML = "";
    if (BookName == "Python")
        Preview.innerHTML = PythonBook.Page1;
    else if (BookName == "Java")
        Preview.innerHTML = JavaBook.Page1;
}