import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle=(heading,subtitle) => (
        <div className='widgets__article'>
          <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
          </div>
          <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
           </div>
        </div>
      
    )
  return (
    <div className='widgets'>
    <div className='widgets__header'>
<h2>Linkdin News</h2>
<InfoIcon />
    </div>
    {newsArticle("WHO'Z THE NEW BIG BULL?","A SMALL BOY FROM THE SMALL VILLAGE OF BIHAR")}
    {newsArticle("NIFTY","FINALLY CROSSES 25000")}

    {newsArticle("BIG BULL VERMA","LOST 90% OF THE WEALTH , AS HE SHORTS THE NIFTY")}

    {newsArticle("GOOGAAson","AS ALWAYS TALKING SHIT")}

    </div>
  );
}

export default Widgets;