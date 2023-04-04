/* Create a component using a class. This is an outdated method(approach).
* В классовом компоненте необходимо реализовать функцию-рендер, которая будет возвращать jsx,
* в отличие от функционального компонента который сразу это делает.*/
import React from 'react';

class ClassCounter extends React.Component {
    /*Необходимо как-то создать состояние, в классовом компоненте делается инача,
    * создаем конструктор. В конструктор параметрами принимает некоторые props,
    * после чего мы инициализируем состояние, для этого зарезервировано у нас свойство
    * в компоненте, которое называется state, внутри него создаем поле count, т.е. счётчик.*/
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        /*Контекст компонента для вывода.
        * Метод bind() создает новую функцию, которая при вызове устанавливает в
        * качестве контекста выполнения this предоставленное значение. В метод
        * также передается набор аргументов, которые будут установлены перед переданными
        * в привязанную функцию аргументами при ее вызове*/

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    /* Поскольку работаем внутри класса, от function можно избавиться, и оставить
    * объявление функции данным образом.
    *
    * Напрямую изменять состояние нельзя, React Component не увидит изменения.
    * Для изменения состояния необходимо вызвать функцию setState в которую передаем новое
    * состояние с измененными значениями.*/

    increment() {
        this.setState({count: this.state.count + 1})


    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }


    /*В функции-рендер мы вместо квадратных скобок указываем круглые, так как возвращаем не объект.
    *
    * Поскольку мы внутри класса, для обращения к каким-либо свойством нужно использовать
    * "this.".*/

    render() {
        return (
            <div>
                <h2>Class Component: </h2>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter;