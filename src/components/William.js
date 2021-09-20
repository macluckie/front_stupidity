import './William.css';
function William() {
  function handleClick(e) {
    e.preventDefault();
    alert('ok')
  }

  return (
    <div className="william">
      <h1> William</h1>
      <a href="#" onClick={handleClick}><img width="400px" src="carton_rouge.jpg" class="img-fluid" alt="carton_rouge"></img></a>   
    </div>
  );
}

export default William;
