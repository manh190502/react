import './style.css'

const MyComponent = () => {
  const mylove = 'Jang';
  // const mylove = 11;
  // const mylove = true;
  // const mylove = [1,2,3];
  // const mylove = {
  //   name: 'Jang',
  //   age: 22,
  // };

  
  return (
    <>
    <div> Manh & {mylove} </div>
    <div className="love">Love</div>
    </>
  );
}

export default MyComponent;