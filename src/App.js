import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패에 따라 테두리 색이 바뀐다. (win -green, lose -red, black)

const choice = {
  rock : {
    name : "Rock",
    img : "https://cdn-icons-png.flaticon.com/512/7218/7218790.png"
  },
  scissors : {
    name : "Scissors",
    img : "https://cdn-icons-png.flaticon.com/512/7218/7218708.png"
  },
  paper : {
    name : "Paper",
    img : "https://cdn-icons-png.flaticon.com/512/7218/7218720.png"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  }

  const judgement = (user, computer) => {
    // user == cpu tie
    // user == rock, cpu == scissors user win
    // user == rock, cpu == paper user lose
    // user == scissors, cpu == paper user win
    // user == scissors, cpu == rock user lose
    // user == paper, cpu == rock user win
    // user == paper, cpu == scissors user lose
    if ( user.name === computer.name ) {
      return "tie";
    } else if ( user.name === "Rock" ) 
      return computer.name === "Scissors"? "win" : "lose";
    else if (user.name === "Scissors" ) 
      return computer.name === "Paper"? "win" : "lose";
    else if (user.name === "Paper" )
    return computer.name === "Rock"? "win" : "lose";
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 배열로 만들어준다
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final]
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} /> 
      </div>
      <div className='button-area'>
        <button onClick={() => play("scissors")}><img src="https://cdn-icons-png.flaticon.com/512/7218/7218708.png" alt="" /></button>
        <button onClick={() => play("rock")}><img src="https://cdn-icons-png.flaticon.com/512/7218/7218790.png" alt="" /></button>
        <button onClick={() => play("paper")}><img src="https://cdn-icons-png.flaticon.com/512/7218/7218720.png" alt="" /></button>
      </div>
    </div>
  );
}

export default App;
