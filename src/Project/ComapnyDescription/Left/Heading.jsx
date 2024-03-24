import React ,{useState,useEffect} from 'react'

const Heading = () => {
    const [visitDate, setVisitDate] = useState(null);
    useEffect(() => {
        // Check if visit date is stored in local storage
        const storedDate = localStorage.getItem('visitDate');
        if (storedDate) {
          setVisitDate(new Date(storedDate));
        } else {
          // If visit date is not stored, set it to current date
          const currentDate = new Date();
          localStorage.setItem('visitDate', currentDate);
          setVisitDate(currentDate);
        }
      }, []);

      const formatVisitDate = (date) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month} ${day} ${year}`;
      };
    
  return (
    <div>
    <div className='text-3xl text-wrap capitalize font-semibold'>
       <p>
       [hiring] senior independent software developer

       </p> 
       <p>@ a.team</p>
    </div>
    <div className='leading-tigh text-sm tracking-wid mb-4 border-b-2 pb-3  text-wrap font-thin'>
    <p> {visitDate ? formatVisitDate(visitDate) : 'Loading...'} - A.Team is hiring a remote Senior Independent Software Developer. 💸 Salary: $90 - $150 /hour. 📍Location: USA timezones, European timezones.</p>
    </div>
      
    </div>
  )
}

export default Heading
