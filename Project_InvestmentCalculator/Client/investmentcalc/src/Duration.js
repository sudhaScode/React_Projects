
function Duration (props){
   
  return( 
    <div>
      <td>{props.investmentDuration}</td>
      <td>{props.totalSavings}</td>
      <td>{props.intrest}</td>
      <td>{props.intrestGained}</td>
      <td>{props.investedCapital}</td>
  </div>
  );
}
export default Duration;