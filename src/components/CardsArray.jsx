import Card from "./Card.jsx";

const CardsArray = ({ robots }) => {
   return (
      <div>
         {robots.map((robot) => {
            return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />;
         })}
      </div>
   );
};
export default CardsArray;
