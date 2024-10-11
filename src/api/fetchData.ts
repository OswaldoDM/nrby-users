
export const fetchData = async (results:number, page:number) => {
    try {
      const resp = await fetch(`https://randomuser.me/api?results=${results}&seed=odm&page=${page}`);
      if (!resp.ok) throw new Error(`resp Error: ${resp.status}`);
      return await resp.json();  
    } catch (error) {
      console.log(`Error fetchData: ${error}`);
    }
};