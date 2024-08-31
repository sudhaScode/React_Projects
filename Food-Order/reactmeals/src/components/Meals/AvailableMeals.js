import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';


const AvailableMeals =()=>{
      const [meals, setMeals] =  useState([]);
      const [isLoding, setIsLoading] =useState(true);
      const [httpError, setHttpError] =useState("");

      useEffect(()=>{
        const fetchMealsHandler = async()=>{ 
            const response = await fetch('https://react-sever-default-rtdb.firebaseio.com/meals.json');
            if(!response.ok){
                throw new Error("Something went WR");
            }
            const resoponseData = await response.json();
            const availableMeals = [];

            for (const key in resoponseData){
                availableMeals.push({
                    id : key,   
                    name: resoponseData[key].name,
                    description: resoponseData[key].description,
                    price: resoponseData[key].price,
                });

            }
            setMeals(availableMeals);
            };
            fetchMealsHandler().catch((error)=>{
                setIsLoading(false);
                setHttpError(error.message);                
            });
            setIsLoading(false);
       }   ,[]);

       if(httpError){
        return(
            <section className={classes.mealsError}>
                <p>{httpError}</p>
            </section>
          );
       }

       if(isLoding){
          return(
            <section className={classes.mealsLoading}>
                <p>Loading...</p>
            </section>
          );
       }

    const mealsList = meals.map(type=> <MealItem key = {type.id} id = {type.id} name = {type.name} description ={type.description} price={type.price}/>);
    return(
        <section className={classes.meals}>
          <Card>   
            <ul>
                {mealsList}
            </ul>
          </Card>
        </section>
    );
}
export default AvailableMeals;