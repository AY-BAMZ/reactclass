const { createContext, useContext, useState } = require("react");

export const TodoContext = createContext({});

function TodoProvider(props) {
  const [goals, setGoals] = useState([]);
  const handleAddGoal = (goal) => {
    setGoals([...goals, goal]);
  };
  const handleEditGoals = ({ id, values }) => {
    const latestTasks = goals.map((item) =>
      id === item.id ? { ...item, ...values } : item
    );
    setGoals(latestTasks);
  };

  const handleDeleteGoal = (id) => {
    const latestTasks = goals.filter((item) => id !== item.id);
    setGoals(latestTasks);
  };

  class Rectangle {
    constructor(age, name) {
      this.age = age;
      this.name = name;
    }

    get area() {
      return this.calArea();
    }
    calArea() {
      return this.age + " " + this.name;
    }
  }

  var arrayElements = [1, 2, 3, 4, 2];

  console.log(arrayElements);

  //[1, 2, 3, 4, 2]

  arrayElements.forEach((element, index) => {
    if (element == 2) arrayElements.splice(index, 1, 4);
  });

  //   console.log(arrayElements);

  //   const per = { name: "aer" };

  //   const addHonoric = () => {
  //     const localPerson = per;

  //     localPerson.name = `Mr. ${person.name}`;
  //   };
  //   console.log("addHonoric(per) :>> ", addHonoric());

  //   const handleCounter = (x, y) => {
  //     const p = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         console.log("i want my baby");
  //         if (x + y < 1) {
  //           reject("you can't add x + y");
  //         }
  //         resolve(x + y);
  //       }, 5000);
  //       console.log("this will happen first ");
  //     });

  //     return p;
  //   };

  //   const full = new Rectangle(12, "John");

  //   handleCounter(78, 98)
  //     .then((result) => {
  //       console.log("handleCounter :>> ", result);
  //     })
  //     .catch((error) => {
  //       console.log("error :>> ", error);
  //     });

  const game = "thishotsh";

  const arr = game.split("");

  const getData = (items) => {
    const itemA = new Set();

    return items.reduce((item, index) => {
      if (!itemA.has(index)) {
        itemA.add(index);
        item.push(index);
      }
      return item;
    }, []);
  };

  console.log("getData(arr) :>> ", getData(arr));
  return (
    <TodoContext.Provider
      value={{
        handleAddGoal,
        handleDeleteGoal,
        handleEditGoals,
        goals,
        setGoals,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  return context;
};

export default TodoProvider;
