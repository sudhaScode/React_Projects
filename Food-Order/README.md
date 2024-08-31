# Project_Food-Order
Implemented the React context, props, and Hooks for state management of application
Fetched the data from database - get request (used firebase) and post request
  const fetchMealsHandler = async()=>{ 
            const response = await fetch('https://react-sever-default-rtdb.firebaseio.com/meals.json');
            if(!response.ok){
                throw new Error("Something went WRONG");
            }
            const resoponseData = await response.json();

const submitOrederHandler = async (userdata)=>{
           setIsSubmitting(true);
        await fetch('https://react-sever-default-rtdb.firebaseio.com/orders.json',{
            method:'POST',
            body: JSON.stringify({
                user: userdata,
                orderItems: crtCtx.items,   
            })
        });
