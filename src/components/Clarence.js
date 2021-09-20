import './Clarence.css';
function Clarence() {
    function handleClick(e) {
        e.preventDefault();
        alert('ok')
      }
    
    return (
      <div class ="clarence">
          <h1> Clarence</h1>
          <a href="#" onClick={handleClick}><img width="400px" src="carton_rouge.jpg" class="img-fluid" alt="carton_rouge"></img></a>   
      </div>
    );
  }
  
  export default Clarence;
  